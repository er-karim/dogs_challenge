class Api::V1::DogsController < ApplicationController
  def img_by_breed
    breed_list = DogApi::BreedListService.new.call
    breed = params[:breed].downcase

    if breed_list.include?(breed)
      render json: { status: 'success', message: DogApi::RandomImageService.new.call(breed) }
    else
      render json: { status: 'error', message: 'Invalid breed' }, status: :unprocessable_entity
    end
  end
end
