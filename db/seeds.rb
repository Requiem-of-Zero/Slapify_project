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

#Albums
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
#Albums-Heroku Seed
hsm.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm.jpg"), filename: 'hsm.jpg')
hsm2.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/HighSchoolMusical2.jpg"), filename: 'HighSchoolMusical2.jpg')
hsm3.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3.jpg"), filename: 'hsm3.jpg')
rodptsd.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/rodwaveptsd.jpg"), filename: 'rodwaveptsd.jpg')
camprock.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/camprock.jpg"), filename: 'camprock.jpg')
osodiff.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/osodiff.jpg"), filename: 'osodiff.jpg')
dagony.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingben.jpg"), filename: 'breakingben.jpg')
initiald.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/initial_D.jpg"), filename: 'initial_D.jpg')
lonely.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely.jpg"), filename: 'lonely.jpg')
triology.photo.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws-west-1.amazonaws.com/trilogy.jpg"), filename: 'trilogy.jpg')


#High School Musical
song1 = Song.create!(album_id: hsm.id, song_name: "Breaking Free")
song2 = Song.create!(album_id: hsm.id, song_name: "What I've Been Looking For")
song3 = Song.create!(album_id: hsm.id, song_name: "Get'cha head In the game")
song4 = Song.create!(album_id: hsm.id, song_name: "Start of Something New")
song5 = Song.create!(album_id: hsm.id, song_name: "Stick to the Status Quo")
song6 = Song.create!(album_id: hsm.id, song_name: "When There Was Me and You")
song7 = Song.create!(album_id: hsm.id, song_name: "We're All In This Together")

#hsm Heroku seed
song1.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm/Breaking_free.mp3"), filename: 'Breaking_free.mp3')
song2.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm/What_ive_been_looking_for.mp3"), filename: 'What_ive_been_looking_for.mp3')
song3.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm/Getcha_head_in_the_game.mp3"), filename: 'Getcha_head_in_the_game.mp3')
song4.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm/Start_of_something_new.mp3"), filename: 'Start_of_something_new.mp3')
song5.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm/Stick_to_the_status_quo.mp3"), filename: 'Stick_to_the_status_quo.mp3')
song6.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm/When_there_was_me_n_you.mp3"), filename: 'When_there_was_me_n_you.mp3')
song7.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm/Were_all_in_this_together.mp3"), filename: 'Were_all_in_this_together.mp3')

#High School Musical 2
song8 = Song.create!(album_id: hsm2.id, song_name: "Gotta Go My Own Way")
song9 = Song.create!(album_id: hsm2.id, song_name: "What Time Is It")
song10 = Song.create!(album_id: hsm2.id, song_name: "Fabulous")
song11 = Song.create!(album_id: hsm2.id, song_name: "Work This Out")
song12 = Song.create!(album_id: hsm2.id, song_name: "You Are the Music in Me")
song13 = Song.create!(album_id: hsm2.id, song_name: "I Don't Dance")
song14 = Song.create!(album_id: hsm2.id, song_name: "Bet On It")
song15 = Song.create!(album_id: hsm2.id, song_name: "Everyday")

#hsm2 Heroku seed
song8.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm2/Gotta_go_my_own_way.mp3"), filename: 'Gotta_go_my_own_way.mp3')
song9.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm2/What_time_is_it.mp3"), filename: 'What_time_is_it.mp3')
song10.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm2/Fabulous.mp3"), filename: 'Fabulous.mp3')
song11.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm2/Work_this_out.mp3"), filename: 'Work_this_out.mp3')
song12.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm2/you_are_the_music_in_me.mp3"), filename: 'you_are_the_music_in_me.mp3')
song13.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm2/I_dont_dance.mp3"), filename: 'I_dont_dance.mp3')
song14.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm2/Bet_on_it.mp3"), filename: 'Bet_on_it.mp3')
song15.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm2/Everyday.mp3"), filename: 'Everyday.mp3')

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

#hsm3 Heroku seed
song17.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/Now_Or_Never.mp3"), filename: 'Now_Or_Never.mp3')
song18.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/Right_here_right_now.mp3"), filename: 'Right_here_right_now.mp3')
song19.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/I_want_it_all.mp3"), filename: 'I_want_it_all.mp3')
song20.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/Can_i_have_this_dance.mp3"), filename: 'Can_i_have_this_dance.mp3')
song22.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/just_wanna_be_with_you.mp3"), filename: 'just_wanna_be_with_you.mp3')
song24.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/A_night_to_remember.mp3"), filename: 'A_night_to_remember.mp3')
song25.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/The_boys_are_back.mp3"), filename: 'The_boys_are_back.mp3')
song26.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/Walk_away.mp3"), filename: 'Walk_away.mp3')
song27.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/hsm3/Scream.mp3"), filename: 'Scream.mp3')

#Rod Wave PTSD
song28 = Song.create!(album_id: rodptsd.id, song_name: "Popular Loner")
song30 = Song.create!(album_id: rodptsd.id, song_name: "PTSD")
song31 = Song.create!(album_id: rodptsd.id, song_name: "Heart On Ice")
song32 = Song.create!(album_id: rodptsd.id, song_name: "Paint The Sky Red")
song33 = Song.create!(album_id: rodptsd.id, song_name: "Calabasas (feat. E-40)")
song34 = Song.create!(album_id: rodptsd.id, song_name: "Proud Of Me")
song35 = Song.create!(album_id: rodptsd.id, song_name: "No Love")
song36 = Song.create!(album_id: rodptsd.id, song_name: "How Would You Feel")
song37 = Song.create!(album_id: rodptsd.id, song_name: "True Story")

#hsm3 Heroku seed
song28.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/Popular_loner.mp3"), filename: 'Popular_loner.mp3')
song30.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/PTSD.mp3"), filename: 'PTSD.mp3')
song31.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/Heart_on_ice.mp3"), filename: 'Heart_on_ice.mp3')
song32.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/Paint_the_sky_red.mp3"), filename: 'Paint_the_sky_red.mp3')
song33.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/Calabasas.mp3"), filename: 'Calabasas.mp3')
song34.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/Proud_of_me.mp3"), filename: 'Proud_of_me.mp3')
song35.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/No_love.mp3"), filename: 'No_love.mp3')
song36.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/How_would_you_feel.mp3"), filename: 'How_would_you_feel.mp3')
song37.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/ptsd/True_story.mp3"), filename: 'True_story.mp3')

#Camp Rock
song39 = Song.create!(album_id: camprock.id, song_name: "We Rock")
song40 = Song.create!(album_id: camprock.id, song_name: "Play My Music")
song41 = Song.create!(album_id: camprock.id, song_name: "Gotta Find You")
song42 = Song.create!(album_id: camprock.id, song_name: "Start the Party")
song43 = Song.create!(album_id: camprock.id, song_name: "Who Will I Be")
song44 = Song.create!(album_id: camprock.id, song_name: "This Is Me")
song46 = Song.create!(album_id: camprock.id, song_name: "Here I Am")

#camp rock Heroku seed
song39.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/camprock/We_rock.mp3"), filename: 'We_rock.mp3')
song40.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/camprock/Play_my_music.mp3"), filename: 'Play_my_music.mp3')
song41.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/camprock/I_gotta_find_you.mp3"), filename: 'I_gotta_find_you.mp3')
song42.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/camprock/Start_the_party.mp3"), filename: 'Start_the_party.mp3')
song43.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/camprock/Who_will_i_be.mp3"), filename: 'Who_will_i_be.mp3')
song44.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/camprock/This_is_me.mp3"), filename: 'This_is_me.mp3')
song46.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/camprock/Here_i_am.mp3"), filename: 'Here_i_am.mp3')

#oso diff
song49 = Song.create!(album_id: osodiff.id, song_name: "Oso Different (Intro)")
song50 = Song.create!(album_id: osodiff.id, song_name: "Tryna Do")
song51 = Song.create!(album_id: osodiff.id, song_name: "Ruthless (Nice Guys Always Finish Last)")
song52 = Song.create!(album_id: osodiff.id, song_name: "I Know (feat. Mozzy)")
song53 = Song.create!(album_id: osodiff.id, song_name: "Lil Mami (feat. TeeJay3k)")
song54 = Song.create!(album_id: osodiff.id, song_name: "Everytime")
song56 = Song.create!(album_id: osodiff.id, song_name: "You Do (feat. Aaron Lee)")
song57 = Song.create!(album_id: osodiff.id, song_name: "You Want It")
song58 = Song.create!(album_id: osodiff.id, song_name: "Some Thangs 2")

#oso diff Heroku seed
song49.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/oso_diff.mp3"), filename: 'oso_diff.mp3')
song50.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/tryna_do.mp3"), filename: 'tryna_do.mp3')
song51.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/ruthless.mp3"), filename: 'ruthless.mp3')
song52.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/i_know.mp3"), filename: 'i_know.mp3')
song53.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/lil_mami.mp3"), filename: 'lil_mami.mp3')
song54.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/everytime.mp3"), filename: 'everytime.mp3')
song56.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/you_do.mp3"), filename: 'you_do.mp3')
song57.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/you_want_it.mp3"), filename: 'you_want_it.mp3')
song58.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/marmar/some_thangs_2.mp3"), filename: 'some_thangs_2.mp3')

#Dear Agony
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

#dear agony Heroku seed
song59.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/fade_away.mp3"), filename: 'fade_away.mp3')
song60.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/i_will_not_bow.mp3"), filename: 'i_will_not_bow.mp3')
song61.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/crawl.mp3"), filename: 'crawl.mp3')
song62.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/give_me_a_sign.mp3"), filename: 'give_me_a_sign.mp3')
song63.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/hopeless.mp3"), filename: 'hopeless.mp3')
song64.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/what_lies_beneath.mp3"), filename: 'what_lies_beneath.mp3')
song65.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/anthem_of_angels.mp3"), filename: 'anthem_of_angels.mp3')
song66.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/lights_out.mp3"), filename: 'lights_out.mp3')
song67.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/dear_agony.mp3"), filename: 'dear_agony.mp3')
song69.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/breakingbenjamin/without_you.mp3"), filename: 'without_you.mp3')

#initial D
song70 = Song.create!(album_id: initiald.id, song_name: "Remember Me")
song71 = Song.create!(album_id: initiald.id, song_name: "Running In The 90's")
song72 = Song.create!(album_id: initiald.id, song_name: "Killing My Love")
song73 = Song.create!(album_id: initiald.id, song_name: "Night Fever")
song74 = Song.create!(album_id: initiald.id, song_name: "Don't Stand So Close")
song76 = Song.create!(album_id: initiald.id, song_name: "Forever Young")

#initial d Heroku seed
song70.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/Initial_D/Remember_me.mp3"), filename: 'Remember_me.mp3')
song71.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/Initial_D/Running_in_the_90_s.mp3"), filename: 'Running_in_the_90_s.mp3')
song72.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/Initial_D/Killing_my_love.mp3"), filename: 'Killing_my_love.mp3')
song73.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/Initial_D/Night_fever.mp3"), filename: 'Night_fever.mp3')
song74.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/Initial_D/Dont_stand.mp3"), filename: 'Dont_stand.mp3')
song76.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/Initial_D/Forever_young.mp3"), filename: 'Forever_young.mp3')

#Lonely Hour
song78 = Song.create!(album_id: lonely.id, song_name: "Good Thing")
song79 = Song.create!(album_id: lonely.id, song_name: "Stay With Me")
song80 = Song.create!(album_id: lonely.id, song_name: "Leave Your Lover")
song81 = Song.create!(album_id: lonely.id, song_name: "I'm Not The Only One")
song82 = Song.create!(album_id: lonely.id, song_name: "I've Told You Now")
song84 = Song.create!(album_id: lonely.id, song_name: "Life Support")
song85 = Song.create!(album_id: lonely.id, song_name: "Not In That Way")
song86 = Song.create!(album_id: lonely.id, song_name: "Lay Me Down")

#lonely hour Heroku seed 
song78.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely/Good_thing.mp3"), filename: 'Good_thing.mp3')
song79.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely/Stay_with_me.mp3"), filename: 'Stay_with_me.mp3')
song80.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely/Leave_your_lover.mp3"), filename: 'Leave_your_lover.mp3')
song81.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely/Im_not_the_only_one.mp3"), filename: 'Im_not_the_only_one.mp3')
song82.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely/Ive_told_you_now.mp3"), filename: 'Ive_told_you_now.mp3')
song84.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely/Life_support.mp3"), filename: 'Life_support.mp3')
song85.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely/Not_in_that_way.mp3"), filename: 'Not_in_that_way.mp3')
song86.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/lonely/lay_me_down.mp3"), filename: 'lay_me_down.mp3')

#Trilogy
song87 = Song.create!(album_id: triology.id, song_name: "High For This")
song88 = Song.create!(album_id: triology.id, song_name: "What You Need")
song90 = Song.create!(album_id: triology.id, song_name: "The Morning")
song91 = Song.create!(album_id: triology.id, song_name: "Wicked Games")
song93 = Song.create!(album_id: triology.id, song_name: "Coming Down")
song94 = Song.create!(album_id: triology.id, song_name: "Loft Music")
song95 = Song.create!(album_id: triology.id, song_name: "The Knowing")

#trilogy Heroku seed 
song87.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/trilogy/High_for_this.mp3"), filename: 'High_for_this.mp3')
song88.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/trilogy/what_u_need.mp3"), filename: 'what_u_need.mp3')
song90.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/trilogy/the_morning.mp3"), filename: 'the_morning.mp3')
song91.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/trilogy/wicked_games.mp3"), filename: 'wicked_games.mp3')
song93.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/trilogy/coming_down.mp3"), filename: 'coming_down.mp3')
song94.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/trilogy/loft_music.mp3"), filename: 'loft_music.mp3')
song95.song.attach(io: File.open("https://slapify-dev.s3-us-west-1.amazonaws.com/trilogy/the_knowing.mp3"), filename: 'the_knowing.mp3')