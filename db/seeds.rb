# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.new(email: 'email@email.com', password: 'hunter12')
user2 = User.create(email: 'email2@email.com', password: 'hunter12')
demoUser = User.create(email: 'demo@demouser.com', password: 'hunter12')
appleUser = User.create(email: 'apple@apple.com', password: 'hunter12')
googleUser = User.create(email: 'google@google.com', password: 'hunter12')