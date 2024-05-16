module DogApi
  class BreedListService < BaseService
    CACHE_KEY = 'breed_list'.freeze
    CACHE_EXPIRY = 8.hour

    def call
      Rails.cache.fetch(CACHE_KEY, expires_in: CACHE_EXPIRY) do
        get('breeds/list/all')['message'].keys
      end
    end
  end
end
