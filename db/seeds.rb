# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

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
hsm.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm.jpg"), filename: 'hsm.jpg')
hsm2.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/HighSchoolMusical2.jpg"), filename: 'HighSchoolMusical2.jpg')
hsm3.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3.jpg"), filename: 'hsm3.jpg')
rodptsd.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/rodwaveptsd.jpg"), filename: 'rodwaveptsd.jpg')
camprock.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/camprock.jpg"), filename: 'camprock.jpg')
osodiff.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/osodiff.jpg"), filename: 'osodiff.jpg')
dagony.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingben.jpg"), filename: 'breakingben.jpg')
initiald.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/initial_D.jpg"), filename: 'initial_D.jpg')
lonely.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely.jpg"), filename: 'lonely.jpg')
triology.photo.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/trilogy.png"), filename: 'trilogy.png')

#High School Musical
song1 = Song.create!(duration: "3:37", album_id: hsm.id, song_name: "Breaking Free")
song2 = Song.create!(duration: "2:08", album_id: hsm.id, song_name: "What I've Been Looking For")
song3 = Song.create!(duration: "2:27", album_id: hsm.id, song_name: "Get'cha head In the game")
song4 = Song.create!(duration: "3:24", album_id: hsm.id, song_name: "Start of Something New")
song5 = Song.create!(duration: "4:35", album_id: hsm.id, song_name: "Stick to the Status Quo")
song6 = Song.create!(duration: "3:00", album_id: hsm.id, song_name: "When There Was Me and You")
song7 = Song.create!(duration: "3:54", album_id: hsm.id, song_name: "We're All In This Together")

#hsm Heroku seed
song1.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm/Breaking_free.mp3"), filename: 'Breaking_free.mp3')
song2.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm/What_ive_been_looking_for.mp3"), filename: 'What_ive_been_looking_for.mp3')
song3.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm/Getcha_head_in_the_game.mp3"), filename: 'Getcha_head_in_the_game.mp3')
song4.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm/Start_of_something_new.mp3"), filename: 'Start_of_something_new.mp3')
song5.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm/Stick_to_the_status_quo.mp3"), filename: 'Stick_to_the_status_quo.mp3')
song6.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm/When_there_was_me_n_you.mp3"), filename: 'When_there_was_me_n_you.mp3')
song7.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm/Were_all_in_this_together.mp3"), filename: 'Were_all_in_this_together.mp3')

#High School Musical 2
song8 = Song.create!(duration: "3:42", album_id: hsm2.id, song_name: "Gotta Go My Own Way")
song9 = Song.create!(duration: "3:23", album_id: hsm2.id, song_name: "What Time Is It")
song10 = Song.create!(duration: "3:09", album_id: hsm2.id, song_name: "Fabulous")
song11 = Song.create!(duration: "3:06", album_id: hsm2.id, song_name: "Work This Out")
song12 = Song.create!(duration: "3:32", album_id: hsm2.id, song_name: "You Are the Music in Me")
song13 = Song.create!(duration: "3:39", album_id: hsm2.id, song_name: "I Don't Dance")
song14 = Song.create!(duration: "3:20", album_id: hsm2.id, song_name: "Bet On It")
song15 = Song.create!(duration: "4:40", album_id: hsm2.id, song_name: "Everyday")

#hsm2 Heroku seed
song8.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm2/Gotta_go_my_own_way.mp3"), filename: 'Gotta_go_my_own_way.mp3')
song9.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm2/What_time_is_it.mp3"), filename: 'What_time_is_it.mp3')
song10.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm2/Fabulous.mp3"), filename: 'Fabulous.mp3')
song11.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm2/Work_this_out.mp3"), filename: 'Work_this_out.mp3')
song12.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm2/you_are_music_in_me.mp3"), filename: 'you_are_music_in_me.mp3')
song13.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm2/I_dont_dance.mp3"), filename: 'I_dont_dance.mp3')
song14.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm2/Bet_on_it.mp3"), filename: 'Bet_on_it.mp3')
song15.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm2/Everyday.mp3"), filename: 'Everyday.mp3')

#High School Musical 3
song17 = Song.create!(duration: "4:30", album_id: hsm3.id, song_name: "Now Or Never")
song18 = Song.create!(duration: "3:55", album_id: hsm3.id, song_name: "Right Here, Right Now")
song19 = Song.create!(duration: "4:39", album_id: hsm3.id, song_name: "I Want It All")
song20 = Song.create!(duration: "4:06", album_id: hsm3.id, song_name: "Can I Have This Dance")
song22 = Song.create!(duration: "2:36", album_id: hsm3.id, song_name: "Just Wanna Be With You")
song24 = Song.create!(duration: "4:05", album_id: hsm3.id, song_name: "A Night to Remember")
song25 = Song.create!(duration: "4:07", album_id: hsm3.id, song_name: "The Boys Are Back")
song26 = Song.create!(duration: "3:51", album_id: hsm3.id, song_name: "Walk Away")
song27 = Song.create!(duration: "4:05", album_id: hsm3.id, song_name: "Scream")

#hsm3 Heroku seed
song17.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/Now_Or_Never.mp3"), filename: 'Now_Or_Never.mp3')
song18.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/Right_here_right_now.mp3"), filename: 'Right_here_right_now.mp3')
song19.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/I_want_it_all.mp3"), filename: 'I_want_it_all.mp3')
song20.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/Can_i_have_this_dance.mp3"), filename: 'Can_i_have_this_dance.mp3')
song22.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/just_wanna_be_with_you.mp3"), filename: 'just_wanna_be_with_you.mp3')
song24.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/A_night_to_remember.mp3"), filename: 'A_night_to_remember.mp3')
song25.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/The_boys_are_back.mp3"), filename: 'The_boys_are_back.mp3')
song26.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/Walk_away.mp3"), filename: 'Walk_away.mp3')
song27.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/hsm3/Scream.mp3"), filename: 'Scream.mp3')

#Rod Wave PTSD
song28 = Song.create!(duration: "2:12", album_id: rodptsd.id, song_name: "Popular Loner")
song30 = Song.create!(duration: "2:11", album_id: rodptsd.id, song_name: "PTSD")
song31 = Song.create!(duration: "2:39", album_id: rodptsd.id, song_name: "Heart On Ice")
song32 = Song.create!(duration: "2:34", album_id: rodptsd.id, song_name: "Paint The Sky Red")
song33 = Song.create!(duration: "4:30", album_id: rodptsd.id, song_name: "Calabasas (feat. E-40)")
song34 = Song.create!(duration: "1:50", album_id: rodptsd.id, song_name: "Proud Of Me")
song35 = Song.create!(duration: "2:44", album_id: rodptsd.id, song_name: "No Love")
song36 = Song.create!(duration: "2:45", album_id: rodptsd.id, song_name: "How Would You Feel")
song37 = Song.create!(duration: "3:25", album_id: rodptsd.id, song_name: "True Story")

#ptsd Heroku seed
song28.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/Popular_loner.mp3"), filename: 'Popular_loner.mp3')
song30.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/PTSD.mp3"), filename: 'PTSD.mp3')
song31.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/Heart_on_ice.mp3"), filename: 'Heart_on_ice.mp3')
song32.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/Paint_the_sky_red.mp3"), filename: 'Paint_the_sky_red.mp3')
song33.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/Calabasas.mp3"), filename: 'Calabasas.mp3')
song34.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/Proud_of_me.mp3"), filename: 'Proud_of_me.mp3')
song35.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/No_love.mp3"), filename: 'No_love.mp3')
song36.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/How_would_you_feel.mp3"), filename: 'How_would_you_feel.mp3')
song37.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/ptsd/True_story.mp3"), filename: 'True_story.mp3')

#Camp Rock
song39 = Song.create!(duration: "3:13", album_id: camprock.id, song_name: "We Rock")
song40 = Song.create!(duration: "3:21", album_id: camprock.id, song_name: "Play My Music")
song41 = Song.create!(duration: "3:02", album_id: camprock.id, song_name: "Gotta Find You")
song42 = Song.create!(duration: "3:02", album_id: camprock.id, song_name: "Start the Party")
song43 = Song.create!(duration: "3:08", album_id: camprock.id, song_name: "Who Will I Be")
song44 = Song.create!(duration: "3:18", album_id: camprock.id, song_name: "This Is Me")
song46 = Song.create!(duration: "3:45", album_id: camprock.id, song_name: "Here I Am")

#camp rock Heroku seed
song39.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/camprock/We_rock.mp3"), filename: 'We_rock.mp3')
song40.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/camprock/Play_my_music.mp3"), filename: 'Play_my_music.mp3')
song41.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/camprock/I_gotta_find_you.mp3"), filename: 'I_gotta_find_you.mp3')
song42.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/camprock/Start_the_party.mp3"), filename: 'Start_the_party.mp3')
song43.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/camprock/Who_will_i_be.mp3"), filename: 'Who_will_i_be.mp3')
song44.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/camprock/This_is_me.mp3"), filename: 'This_is_me.mp3')
song46.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/camprock/Here_i_am.mp3"), filename: 'Here_i_am.mp3')

#oso diff
song49 = Song.create!(duration: "2:25", album_id: osodiff.id, song_name: "Oso Different (Intro)")
song50 = Song.create!(duration: "3:03", album_id: osodiff.id, song_name: "Tryna Do")
song51 = Song.create!(duration: "4:12", album_id: osodiff.id, song_name: "Ruthless (Nice Guys Always Finish Last)")
song52 = Song.create!(duration: "3:06", album_id: osodiff.id, song_name: "I Know (feat. Mozzy)")
song53 = Song.create!(duration: "3:10", album_id: osodiff.id, song_name: "Lil Mami (feat. TeeJay3k)")
song54 = Song.create!(duration: "2:39", album_id: osodiff.id, song_name: "Everytime")
song56 = Song.create!(duration: "3:34", album_id: osodiff.id, song_name: "You Do (feat. Aaron Lee)")
song57 = Song.create!(duration: "3:19", album_id: osodiff.id, song_name: "You Want It")
song58 = Song.create!(duration: "3:55", album_id: osodiff.id, song_name: "Some Thangs 2")

#oso diff Heroku seed
song49.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/oso_diff.mp3"), filename: 'oso_diff.mp3')
song50.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/tryna_do.mp3"), filename: 'tryna_do.mp3')
song51.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/ruthless.mp3"), filename: 'ruthless.mp3')
song52.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/i_know.mp3"), filename: 'i_know.mp3')
song53.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/lil_mami.mp3"), filename: 'lil_mami.mp3')
song54.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/everytime.mp3"), filename: 'everytime.mp3')
song56.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/you_do.mp3"), filename: 'you_do.mp3')
song57.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/you_want_it.mp3"), filename: 'you_want_it.mp3')
song58.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/marmar/some_thangs_2.mp3"), filename: 'some_thangs_2.mp3')

#Dear Agony
song59 = Song.create!(duration: "3:14", album_id: dagony.id, song_name: "Fade Away")
song60 = Song.create!(duration: "3:39", album_id: dagony.id, song_name: "I Will Not Bow")
song61 = Song.create!(duration: "3:56", album_id: dagony.id, song_name: "Crawl")
song62 = Song.create!(duration: "4:17", album_id: dagony.id, song_name: "Give Me A Sign")
song63 = Song.create!(duration: "3:18", album_id: dagony.id, song_name: "Hopeless")
song64 = Song.create!(duration: "3:34", album_id: dagony.id, song_name: "What Lies Beneath")
song65 = Song.create!(duration: "4:03", album_id: dagony.id, song_name: "Anthem Of The Angels")
song66 = Song.create!(duration: "3:33", album_id: dagony.id, song_name: "Lights Out")
song67 = Song.create!(duration: "4:17", album_id: dagony.id, song_name: "Dear Agony")
song69 = Song.create!(duration: "4:18", album_id: dagony.id, song_name: "Without You")

#dear agony Heroku seed
song59.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/fade_away.mp3"), filename: 'fade_away.mp3')
song60.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/i_will_not_bow.mp3"), filename: 'i_will_not_bow.mp3')
song61.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/crawl.mp3"), filename: 'crawl.mp3')
song62.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/give_me_a_sign.mp3"), filename: 'give_me_a_sign.mp3')
song63.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/hopeless.mp3"), filename: 'hopeless.mp3')
song64.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/what_lies_beneath.mp3"), filename: 'what_lies_beneath.mp3')
song65.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/anthem_of_angels.mp3"), filename: 'anthem_of_angels.mp3')
song66.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/lights_out.mp3"), filename: 'lights_out.mp3')
song67.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/dear_agony.mp3"), filename: 'dear_agony.mp3')
song69.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/breakingbenjamin/without_you.mp3"), filename: 'without_you.mp3')

#initial D
song70 = Song.create!(duration: "4:53", album_id: initiald.id, song_name: "Remember Me")
song71 = Song.create!(duration: "4:45", album_id: initiald.id, song_name: "Running In The 90's")
song72 = Song.create!(duration: "3:13", album_id: initiald.id, song_name: "Killing My Love")
song73 = Song.create!(duration: "4:54", album_id: initiald.id, song_name: "Night Fever")
song74 = Song.create!(duration: "4:59", album_id: initiald.id, song_name: "Don't Stand So Close")
song76 = Song.create!(duration: "6:17", album_id: initiald.id, song_name: "Forever Young")

#initial d Heroku seed
song70.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/Initial_D/Remember_me.mp3"), filename: 'Remember_me.mp3')
song71.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/Initial_D/Running_in_the_90_s.mp3"), filename: 'Running_in_the_90_s.mp3')
song72.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/Initial_D/Killing_my_love.mp3"), filename: 'Killing_my_love.mp3')
song73.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/Initial_D/Night_fever.mp3"), filename: 'Night_fever.mp3')
song74.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/Initial_D/Dont_stand.mp3"), filename: 'Dont_stand.mp3')
song76.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/Initial_D/Forever_young.mp3"), filename: 'Forever_young.mp3')

#Lonely Hour
song78 = Song.create!(duration: "3:02", album_id: lonely.id, song_name: "Good Thing")
song79 = Song.create!(duration: "2:55", album_id: lonely.id, song_name: "Stay With Me")
song80 = Song.create!(duration: "3:10", album_id: lonely.id, song_name: "Leave Your Lover")
song81 = Song.create!(duration: "3:58", album_id: lonely.id, song_name: "I'm Not The Only One")
song82 = Song.create!(duration: "3:30", album_id: lonely.id, song_name: "I've Told You Now")
song84 = Song.create!(duration: "2:53", album_id: lonely.id, song_name: "Life Support")
song85 = Song.create!(duration: "2:52", album_id: lonely.id, song_name: "Not In That Way")
song86 = Song.create!(duration: "4:11", album_id: lonely.id, song_name: "Lay Me Down")

#lonely hour Heroku seed 
song78.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely/Good_thing.mp3"), filename: 'Good_thing.mp3')
song79.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely/Stay_with_me.mp3"), filename: 'Stay_with_me.mp3')
song80.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely/Leave_your_lover.mp3"), filename: 'Leave_your_lover.mp3')
song81.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely/Im_not_the_only_one.mp3"), filename: 'Im_not_the_only_one.mp3')
song82.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely/Ive_told_you_now.mp3"), filename: 'Ive_told_you_now.mp3')
song84.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely/Life_support.mp3"), filename: 'Life_support.mp3')
song85.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely/Not_in_that_way.mp3"), filename: 'Not_in_that_way.mp3')
song86.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/lonely/lay_me_down.mp3"), filename: 'lay_me_down.mp3')

#Trilogy
song87 = Song.create!(duration: "4:07", album_id: triology.id, song_name: "High For This")
song88 = Song.create!(duration: "3:16", album_id: triology.id, song_name: "What You Need")
song90 = Song.create!(duration: "5:19", album_id: triology.id, song_name: "The Morning")
song91 = Song.create!(duration: "5:23", album_id: triology.id, song_name: "Wicked Games")
song93 = Song.create!(duration: "4:55", album_id: triology.id, song_name: "Coming Down")
song94 = Song.create!(duration: "6:08", album_id: triology.id, song_name: "Loft Music")
song95 = Song.create!(duration: "5:49", album_id: triology.id, song_name: "The Knowing")

#trilogy Heroku seed 
song87.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/trilogy/High_for_this.mp3"), filename: 'High_for_this.mp3')
song88.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/trilogy/what_u_need.mp3"), filename: 'what_u_need.mp3')
song90.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/trilogy/the_morning.mp3"), filename: 'the_morning.mp3')
song91.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/trilogy/wicked_games.mp3"), filename: 'wicked_games.mp3')
song93.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/trilogy/coming_down.mp3"), filename: 'coming_down.mp3')
song94.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/trilogy/loft_music.mp3"), filename: 'loft_music.mp3')
song95.song_file.attach(io: open("https://slapify-prod.s3-us-west-1.amazonaws.com/trilogy/the_knowing.mp3"), filename: 'the_knowing.mp3')

#local seeds 
# hsm.photo.attach(io: File.open("app/assets/images/hsm.jpg"), filename: 'hsm.jpg')
# hsm2.photo.attach(io: File.open("app/assets/images/HighSchoolMusical2.jpg"), filename: 'HighSchoolMusical2.jpg')
# hsm3.photo.attach(io: File.open("app/assets/images/hsm3.jpg"), filename: 'hsm3.jpg')
# rodptsd.photo.attach(io: File.open("app/assets/images/rodwaveptsd.jpg"), filename: 'rodwaveptsd.jpg')
# camprock.photo.attach(io: File.open("app/assets/images/camprock.jpg"), filename: 'camprock.jpg')
# osodiff.photo.attach(io: File.open("app/assets/images/osodiff.jpg"), filename: 'osodiff.jpg')
# dagony.photo.attach(io: File.open("app/assets/images/breakingben.jpg"), filename: 'breakingben.jpg')
# initiald.photo.attach(io: File.open("app/assets/images/initial_D.jpg"), filename: 'initial_D.jpg')
# lonely.photo.attach(io: File.open("app/assets/images/lonely.jpg"), filename: 'lonely.jpg')
# triology.photo.attach(io: File.open("app/assets/images/trilogy.png"), filename: 'trilogy.png')
# song1.song_file.attach(io: File.open("audio/hsm/Breaking_free.mp3"), filename: 'Breaking_free.mp3')
# song2.song_file.attach(io: File.open("audio/hsm/What_ive_been_looking_for.mp3"), filename: 'What_ive_been_looking_for.mp3')
# song3.song_file.attach(io: File.open("audio/hsm/Getcha_head_in_the_game.mp3"), filename: 'Getcha_head_in_the_game.mp3')
# song4.song_file.attach(io: File.open("audio/hsm/Start_of_something_new.mp3"), filename: 'Start_of_something_new.mp3')
# song5.song_file.attach(io: File.open("audio/hsm/Stick_to_the_status_quo.mp3"), filename: 'Stick_to_the_status_quo.mp3')
# song6.song_file.attach(io: File.open("audio/hsm/When_there_was_me_n_you.mp3"), filename: 'When_there_was_me_n_you.mp3')
# song7.song_file.attach(io: File.open("audio/hsm/Were_all_in_this_together.mp3"), filename: 'Were_all_in_this_together.mp3')
# song8.song_file.attach(io: File.open("audio/hsm2/Gotta_go_my_own_way.mp3"), filename: 'Gotta_go_my_own_way.mp3')
# song9.song_file.attach(io: File.open("audio/hsm2/What_time_is_it.mp3"), filename: 'What_time_is_it.mp3')
# song10.song_file.attach(io: File.open("audio/hsm2/Fabulous.mp3"), filename: 'Fabulous.mp3')
# song11.song_file.attach(io: File.open("audio/hsm2/Work_this_out.mp3"), filename: 'Work_this_out.mp3')
# song12.song_file.attach(io: File.open("audio/hsm2/you_are_music_in_me.mp3"), filename: 'you_are_music_in_me.mp3')
# song13.song_file.attach(io: File.open("audio/hsm2/I_dont_dance.mp3"), filename: 'I_dont_dance.mp3')
# song14.song_file.attach(io: File.open("audio/hsm2/Bet_on_it.mp3"), filename: 'Bet_on_it.mp3')
# song15.song_file.attach(io: File.open("audio/hsm2/Everyday.mp3"), filename: 'Everyday.mp3')
# song17.song_file.attach(io: File.open("audio/hsm3/Now_Or_Never.mp3"), filename: 'Now_Or_Never.mp3')
# song18.song_file.attach(io: File.open("audio/hsm3/Right_here_right_now.mp3"), filename: 'Right_here_right_now.mp3')
# song19.song_file.attach(io: File.open("audio/hsm3/I_want_it_all.mp3"), filename: 'I_want_it_all.mp3')
# song20.song_file.attach(io: File.open("audio/hsm3/Can_i_have_this_dance.mp3"), filename: 'Can_i_have_this_dance.mp3')
# song22.song_file.attach(io: File.open("audio/hsm3/just_wanna_be_with_you.mp3"), filename: 'just_wanna_be_with_you.mp3')
# song24.song_file.attach(io: File.open("audio/hsm3/A_night_to_remember.mp3"), filename: 'A_night_to_remember.mp3')
# song25.song_file.attach(io: File.open("audio/hsm3/The_boys_are_back.mp3"), filename: 'The_boys_are_back.mp3')
# song26.song_file.attach(io: File.open("audio/hsm3/Walk_away.mp3"), filename: 'Walk_away.mp3')
# song27.song_file.attach(io: File.open("audio/hsm3/Scream.mp3"), filename: 'Scream.mp3')
# song28.song_file.attach(io: File.open("audio/ptsd/Popular_loner.mp3"), filename: 'Popular_loner.mp3')
# song30.song_file.attach(io: File.open("audio/ptsd/PTSD.mp3"), filename: 'PTSD.mp3')
# song31.song_file.attach(io: File.open("audio/ptsd/Heart_on_ice.mp3"), filename: 'Heart_on_ice.mp3')
# song32.song_file.attach(io: File.open("audio/ptsd/Paint_the_sky_red.mp3"), filename: 'Paint_the_sky_red.mp3')
# song33.song_file.attach(io: File.open("audio/ptsd/Calabasas.mp3"), filename: 'Calabasas.mp3')
# song34.song_file.attach(io: File.open("audio/ptsd/Proud_of_me.mp3"), filename: 'Proud_of_me.mp3')
# song35.song_file.attach(io: File.open("audio/ptsd/No_love.mp3"), filename: 'No_love.mp3')
# song36.song_file.attach(io: File.open("audio/ptsd/How_would_you_feel.mp3"), filename: 'How_would_you_feel.mp3')
# song37.song_file.attach(io: File.open("audio/ptsd/True_story.mp3"), filename: 'True_story.mp3')
# song39.song_file.attach(io: File.open("audio/camprock/We_rock.mp3"), filename: 'We_rock.mp3')
# song40.song_file.attach(io: File.open("audio/camprock/Play_my_music.mp3"), filename: 'Play_my_music.mp3')
# song41.song_file.attach(io: File.open("audio/camprock/I_gotta_find_you.mp3"), filename: 'I_gotta_find_you.mp3')
# song42.song_file.attach(io: File.open("audio/camprock/Start_the_party.mp3"), filename: 'Start_the_party.mp3')
# song43.song_file.attach(io: File.open("audio/camprock/Who_will_i_be.mp3"), filename: 'Who_will_i_be.mp3')
# song44.song_file.attach(io: File.open("audio/camprock/This_is_me.mp3"), filename: 'This_is_me.mp3')
# song46.song_file.attach(io: File.open("audio/camprock/Here_i_am.mp3"), filename: 'Here_i_am.mp3')
# song49.song_file.attach(io: File.open("audio/marmar/oso_diff.mp3"), filename: 'oso_diff.mp3')
# song50.song_file.attach(io: File.open("audio/marmar/tryna_do.mp3"), filename: 'tryna_do.mp3')
# song51.song_file.attach(io: File.open("audio/marmar/ruthless.mp3"), filename: 'ruthless.mp3')
# song52.song_file.attach(io: File.open("audio/marmar/i_know.mp3"), filename: 'i_know.mp3')
# song53.song_file.attach(io: File.open("audio/marmar/lil_mami.mp3"), filename: 'lil_mami.mp3')
# song54.song_file.attach(io: File.open("audio/marmar/everytime.mp3"), filename: 'everytime.mp3')
# song56.song_file.attach(io: File.open("audio/marmar/you_do.mp3"), filename: 'you_do.mp3')
# song57.song_file.attach(io: File.open("audio/marmar/you_want_it.mp3"), filename: 'you_want_it.mp3')
# song58.song_file.attach(io: File.open("audio/marmar/some_thangs_2.mp3"), filename: 'some_thangs_2.mp3')
# song59.song_file.attach(io: File.open("audio/breakingbenjamin/fade_away.mp3"), filename: 'fade_away.mp3')
# song60.song_file.attach(io: File.open("audio/breakingbenjamin/i_will_not_bow.mp3"), filename: 'i_will_not_bow.mp3')
# song61.song_file.attach(io: File.open("audio/breakingbenjamin/crawl.mp3"), filename: 'crawl.mp3')
# song62.song_file.attach(io: File.open("audio/breakingbenjamin/give_me_a_sign.mp3"), filename: 'give_me_a_sign.mp3')
# song63.song_file.attach(io: File.open("audio/breakingbenjamin/hopeless.mp3"), filename: 'hopeless.mp3')
# song64.song_file.attach(io: File.open("audio/breakingbenjamin/what_lies_beneath.mp3"), filename: 'what_lies_beneath.mp3')
# song65.song_file.attach(io: File.open("audio/breakingbenjamin/anthem_of_angels.mp3"), filename: 'anthem_of_angels.mp3')
# song66.song_file.attach(io: File.open("audio/breakingbenjamin/lights_out.mp3"), filename: 'lights_out.mp3')
# song67.song_file.attach(io: File.open("audio/breakingbenjamin/dear_agony.mp3"), filename: 'dear_agony.mp3')
# song69.song_file.attach(io: File.open("audio/breakingbenjamin/without_you.mp3"), filename: 'without_you.mp3')
# song70.song_file.attach(io: File.open("audio/Initial_D/Remember_me.mp3"), filename: 'Remember_me.mp3')
# song71.song_file.attach(io: File.open("audio/Initial_D/Running_in_the_90_s.mp3"), filename: 'Running_in_the_90_s.mp3')
# song72.song_file.attach(io: File.open("audio/Initial_D/Killing_my_love.mp3"), filename: 'Killing_my_love.mp3')
# song73.song_file.attach(io: File.open("audio/Initial_D/Night_fever.mp3"), filename: 'Night_fever.mp3')
# song74.song_file.attach(io: File.open("audio/Initial_D/Dont_stand.mp3"), filename: 'Dont_stand.mp3')
# song76.song_file.attach(io: File.open("audio/Initial_D/Forever_young.mp3"), filename: 'Forever_young.mp3')
# song78.song_file.attach(io: File.open("audio/lonely/Good_thing.mp3"), filename: 'Good_thing.mp3')
# song79.song_file.attach(io: File.open("audio/lonely/Stay_with_me.mp3"), filename: 'Stay_with_me.mp3')
# song80.song_file.attach(io: File.open("audio/lonely/Leave_your_lover.mp3"), filename: 'Leave_your_lover.mp3')
# song81.song_file.attach(io: File.open("audio/lonely/Im_not_the_only_one.mp3"), filename: 'Im_not_the_only_one.mp3')
# song82.song_file.attach(io: File.open("audio/lonely/Ive_told_you_now.mp3"), filename: 'Ive_told_you_now.mp3')
# song84.song_file.attach(io: File.open("audio/lonely/Life_support.mp3"), filename: 'Life_support.mp3')
# song85.song_file.attach(io: File.open("audio/lonely/Not_in_that_way.mp3"), filename: 'Not_in_that_way.mp3')
# song86.song_file.attach(io: File.open("audio/lonely/lay_me_down.mp3"), filename: 'lay_me_down.mp3')
# song87.song_file.attach(io: File.open("audio/trilogy/High_for_this.mp3"), filename: 'High_for_this.mp3')
# song88.song_file.attach(io: File.open("audio/trilogy/what_u_need.mp3"), filename: 'what_u_need.mp3')
# song90.song_file.attach(io: File.open("audio/trilogy/the_morning.mp3"), filename: 'the_morning.mp3')
# song91.song_file.attach(io: File.open("audio/trilogy/wicked_games.mp3"), filename: 'wicked_games.mp3')
# song93.song_file.attach(io: File.open("audio/trilogy/coming_down.mp3"), filename: 'coming_down.mp3')
# song94.song_file.attach(io: File.open("audio/trilogy/loft_music.mp3"), filename: 'loft_music.mp3')
# song95.song_file.attach(io: File.open("audio/trilogy/the_knowing.mp3"), filename: 'the_knowing.mp3')