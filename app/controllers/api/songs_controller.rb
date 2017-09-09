require 'pry'

class Api::SongsController < ApplicationController
  before_action :set_song, only: [:update, :destroy]

  def index
    render json: Song.all.order(:created_at)
  end

  def create
    song = Song.new(song_params)
    if song.save
      render json: song
    else
      render json: { errors: song.errors }, status: 418
    end
  end

  def update
    if @song.update
      render json: @song
    else
      rener json: { errors: @song.errors }, status: 418
    end
  end


  def destroy
    Song.find(params[:id]).destroy
    render json: { message: 'Song deleted' }
  end

  private
  def set_song
    @song = Song.find(params[:id])
  end

  def song_params
    params.require(:song).permit(:title)
  end
end
