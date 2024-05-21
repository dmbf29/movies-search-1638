class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc, title: :asc)

    if params[:query].present?
      @movies = @movies.where("title ILIKE ?", "%#{params[:query]}%")
    end
    # the normal flow in rails is to respond_to HTML
    respond_to do |format|
      format.html { render 'index'} # browser
      # format.json { render json: @movies }
      format.text {
        render partial: 'movies/list', locals: { movies: @movies }, formats: [:html]
       } # search Stimulus controllers
    end
  end
end
