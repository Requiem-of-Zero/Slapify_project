class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render :index
    # render '/api/songs/index'
  end

  def update
    @song = Song.find(params[:id])
    new_play_count = @song.play_count + 1

    if @song.update(play_count: new_play_count)
        render json: @track
    end
  end

  def create
    @playlist_song = PlaylistSong.new(playlist_id: params[:playlist_id], song_id: params[:song_id])
    if @playlist_song.save
      render json: params[:song_id]
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find_by(playlist_id: params[:playlist_id], song_id: params[:song_id])
    if @playlist_song.destroy
      render json: @playlist_song.song_id
    else
      render json: @playlist_song.errors.full_messages, status: 422
    end
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end
  
end
