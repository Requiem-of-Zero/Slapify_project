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

demoUser = User.create!(email: 'demo@demouser.com', password: 'hunter12')
appleUser = User.create!(email: 'apple@apple.com', password: 'hunter12')
googleUser = User.create!(email: 'google@gmail.com', password: 'hunter12')

artist1 = Artist.create!(name: 'Disney Channel')
rodwave = Artist.create!(name: 'Rod Wave')
marmar = Artist.create!(name: 'MarMar Oso')
breakingb = Artist.create!(name: 'Breaking Benjamin')
supereuro = Artist.create!(name: 'SUPER EUROBEAT')
samsmith = Artist.create!(name: 'Sam Smith')
weekend = Artist.create!(name: 'The Weeknd')

hsm = Album.create!(album_name: 'High School Musical', year: 2006, artist_id: artist1.id)
hsm2 = Album.create!(album_name: 'High School Musical 2', year: 2007, artist_id: artist1.id)
hsm3 = Album.create!(album_name: 'High School Musical 3: Senior Year', year: 2008, artist_id: artist1.id)

rodptsd = Album.create!(album_name: 'PTSD', year: 2019, artist_id: rodwave.id)
camprock = Album.create!(album_name: 'Camp Rock', year: 2008, artist_id: artist1.id)
osodiff = Album.create!(album_name: 'Oso Different', year: 2019, artist_id: marmar.id)
dagony = Album.create!(album_name: 'Dear Agony', year: 2009, artist_id: breakingb.id)
initiald = Album.create!(album_name: 'Initial D', year: 1998, artist_id: supereuro.id)
lonely = Album.create!(album_name: 'In The Lonely Hour', year: 2014, artist_id: samsmith.id)
triology = Album.create!(album_name: 'Trilogy', year: 2012, artist_id: weekend.id)

#High School Musical
song1 = Song.create!(album_id: hsm.id, song_name: "Breaking Free")
song2 = Song.create!(album_id: hsm.id, song_name: "What I've Been Looking For")
song3 = Song.create!(album_id: hsm.id, song_name: "Get'cha head In the game")
song4 = Song.create!(album_id: hsm.id, song_name: "Start of Something New")
song5 = Song.create!(album_id: hsm.id, song_name: "Stick to the Status Quo")
song6 = Song.create!(album_id: hsm.id, song_name: "When There Was Me and You")
song7 = Song.create!(album_id: hsm.id, song_name: "We're All In This Together")
#High School Musical 2
song8 = Song.create!(album_id: hsm2.id, song_name: "Gotta Go My Own Way")
song9 = Song.create!(album_id: hsm2.id, song_name: "What Time Is It")
song10 = Song.create!(album_id: hsm2.id, song_name: "Fabulous")
song11 = Song.create!(album_id: hsm2.id, song_name: "Work This Out")
song12 = Song.create!(album_id: hsm2.id, song_name: "You Are the Music in Me")
song13 = Song.create!(album_id: hsm2.id, song_name: "I Don't Dance")
song14 = Song.create!(album_id: hsm2.id, song_name: "Bet On It")
song15 = Song.create!(album_id: hsm2.id, song_name: "Everyday")
#High School Musical 3
song17 = Song.create!(album_id: hsm3.id, song_name: "Now Or Never")
song18 = Song.create!(album_id: hsm3.id, song_name: "Right Here, Right Now")
song19 = Song.create!(album_id: hsm3.id, song_name: "I Want It All")
song20 = Song.create!(album_id: hsm3.id, song_name: "Can I Have This Dance")
song22 = Song.create!(album_id: hsm3.id, song_name: "Just Wanna Be With You")
song24 = Song.create!(album_id: hsm3.id, song_name: "A Night to Remember")
song25 = Song.create!(album_id: hsm3.id, song_name: "The Boys Are Back")
song26 = Song.create!(album_id: hsm3.id, song_name: "Walk Away")
song27 = Song.create!(album_id: hsm3.id, song_name: "Scream")

song28 = Song.create!(album_id: rodptsd.id, song_name: "Popular Loner")
song30 = Song.create!(album_id: rodptsd.id, song_name: "PTSD")
song31 = Song.create!(album_id: rodptsd.id, song_name: "Heart On Ice")
song32 = Song.create!(album_id: rodptsd.id, song_name: "Paint The Sky Red")
song33 = Song.create!(album_id: rodptsd.id, song_name: "Calabasas (feat. E-40)")
song34 = Song.create!(album_id: rodptsd.id, song_name: "Proud Of Me")
song35 = Song.create!(album_id: rodptsd.id, song_name: "No Love")
song36 = Song.create!(album_id: rodptsd.id, song_name: "How Would You Feel")
song37 = Song.create!(album_id: rodptsd.id, song_name: "True Story")

song39 = Song.create!(album_id: camprock.id, song_name: "We Rock")
song40 = Song.create!(album_id: camprock.id, song_name: "Play My Music")
song41 = Song.create!(album_id: camprock.id, song_name: "Gotta Find You")
song42 = Song.create!(album_id: camprock.id, song_name: "Start the Party")
song43 = Song.create!(album_id: camprock.id, song_name: "Who Will I Be")
song44 = Song.create!(album_id: camprock.id, song_name: "This Is Me")
song46 = Song.create!(album_id: camprock.id, song_name: "Here I Am")

song49 = Song.create!(album_id: osodiff.id, song_name: "Oso Different (Intro)")
song50 = Song.create!(album_id: osodiff.id, song_name: "Tryna Do")
song51 = Song.create!(album_id: osodiff.id, song_name: "Ruthless (Nice Guys Always Finish Last)")
song52 = Song.create!(album_id: osodiff.id, song_name: "I Know (feat. Mozzy)")
song53 = Song.create!(album_id: osodiff.id, song_name: "Lil Mami (feat. TeeJay3k)")
song54 = Song.create!(album_id: osodiff.id, song_name: "Everytime")
song56 = Song.create!(album_id: osodiff.id, song_name: "You Do (feat. Aaron Lee)")
song57 = Song.create!(album_id: osodiff.id, song_name: "You Want It")
song58 = Song.create!(album_id: osodiff.id, song_name: "Some Thangs 2")

song59 = Song.create!(album_id: dagony.id, song_name: "Fade Away")
song60 = Song.create!(album_id: dagony.id, song_name: "I Will Not Bow")
song61 = Song.create!(album_id: dagony.id, song_name: "Crawl")
song62 = Song.create!(album_id: dagony.id, song_name: "Give Me A Sign")
song63 = Song.create!(album_id: dagony.id, song_name: "Hopeless")
song64 = Song.create!(album_id: dagony.id, song_name: "What Lies Beneath")
song65 = Song.create!(album_id: dagony.id, song_name: "Anthem Of The Angels")
song66 = Song.create!(album_id: dagony.id, song_name: "Lights Out")
song67 = Song.create!(album_id: dagony.id, song_name: "Dear Agony")
song69 = Song.create!(album_id: dagony.id, song_name: "Without You")

song70 = Song.create!(album_id: initiald.id, song_name: "Remember Me")
song71 = Song.create!(album_id: initiald.id, song_name: "Running In The 90's")
song72 = Song.create!(album_id: initiald.id, song_name: "Killing My Love")
song73 = Song.create!(album_id: initiald.id, song_name: "Night Fever")
song74 = Song.create!(album_id: initiald.id, song_name: "Don't Stand So Close")
song76 = Song.create!(album_id: initiald.id, song_name: "Forever Young")

song78 = Song.create!(album_id: lonely.id, song_name: "Good Thing")
song79 = Song.create!(album_id: lonely.id, song_name: "Stay With Me")
song80 = Song.create!(album_id: lonely.id, song_name: "Leave Your Lover")
song81 = Song.create!(album_id: lonely.id, song_name: "I'm Not The Only One")
song82 = Song.create!(album_id: lonely.id, song_name: "I've Told You Now")
song84 = Song.create!(album_id: lonely.id, song_name: "Life Support")
song85 = Song.create!(album_id: lonely.id, song_name: "Not In That Way")
song86 = Song.create!(album_id: lonely.id, song_name: "Lay Me Down")

song87 = Song.create!(album_id: triology.id, song_name: "High For This")
song88 = Song.create!(album_id: triology.id, song_name: "What You Need")
song90 = Song.create!(album_id: triology.id, song_name: "The Morning")
song91 = Song.create!(album_id: triology.id, song_name: "Wicked Games")
song93 = Song.create!(album_id: triology.id, song_name: "Coming Down")
song94 = Song.create!(album_id: triology.id, song_name: "Loft Music")
song95 = Song.create!(album_id: triology.id, song_name: "The Knowing")