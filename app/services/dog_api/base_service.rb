module DogApi
  class BaseService
    BASE_URL = 'https://dog.ceo/api/'.freeze

    def initialize
      @conn = Faraday.new(BASE_URL) do |config|
        config.request :json, read_timeout: 5, open_timeout: 1, write_timeout: 5
        config.response :json, content_type: /\bjson$/
        # Error handling
        config.response :raise_error
        # Logging
        config.response :logger, Rails.logger, headers: true, bodies: true, log_level: :debug
      end
    end

    private

    attr_reader :conn

    def get(path, params = {})
      response = conn.get(path, params)
      response.body
    end
  end
end
