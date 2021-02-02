# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :session_token, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  
  validates :password, length: {minimum: 6}, allow_nil: true
  
  after_initialize :ensure_session_token
  
  attr_reader :password
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
    
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
      
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end
    
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
    
  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end
    
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
    
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
