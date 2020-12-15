# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Song.delete_all
Album.delete_all
Artist.delete_all

user1 = User.new(email: 'email@email.com', password: 'hunter12')
user2 = User.create(email: 'email2@email.com', password: 'hunter12')
demoUser = User.create!(email: 'demo@demouser.com', password: 'hunter12')
appleUser = User.create!(email: 'apple@apple.com', password: 'hunter12')
googleUser = User.create!(email: 'google@gmail.com', password: 'hunter12')

artist1 = Artist.create!(name: 'Disney Channel')

hsm = Album.create!(album_name: 'High School Musical', year: 2004, artist_id: artist1.id)
hsm2 = Album.create!(album_name: 'High School Musical 2', year: 2007, artist_id: artist1.id)

song1 = Song.create!(album_id: hsm.id, song_name: "Breaking free")
song2 = Song.create!(album_id: hsm.id, song_name: "Now or never")
song3 = Song.create!(album_id: hsm.id, song_name: "Get'cha head In the game")
song4 = Song.create!(album_id: hsm2.id, song_name: "Gotta go my own way")

