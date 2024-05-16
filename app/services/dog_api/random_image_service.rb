module DogApi
  class RandomImageService < BaseService
    def call(breed)
      get("breed/#{breed}/images/random")['message']
    end
  end
end
