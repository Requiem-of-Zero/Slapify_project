class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    # render json: @songs
    # render '/api/songs/index'
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end
  
end
