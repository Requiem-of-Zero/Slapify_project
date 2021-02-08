class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where(user_id: current_user().id)
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render '/api/playlists/_playlist'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    @playlist.playlist_name = params[:playlist_name]

    if @playlist.save
      render '/api/playlists/_playlist'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist
      @playlist.destroy
      render json: @playlist.id
    else
      render json: ["Playlist doesn't exist"]
    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(:user_id, :playlist_name)
  end
end