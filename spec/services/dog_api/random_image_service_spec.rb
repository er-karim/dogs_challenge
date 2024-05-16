require 'rails_helper'

describe DogApi::RandomImageService do
  describe '#call' do
    include_context 'stubbed API requests'

    let(:service) { described_class.new }
    let!(:breed) { 'african' }

    it 'returns a random image URL for the specified breed' do
      url = service.call(breed)
      expect(url).to match(%r{\Ahttps?://[^\s/$.?#].[^\s]*\z})
      expect(url).to match(/\.(png|jpe?g|gif|bmp)\z/)
    end

    context 'when the API request fails' do
      before do
        stub_request(:get, 'https://dog.ceo/api/breed/african/images/random')
          .to_return(status: 500)
      end

      it 'raises an error' do
        expect { service.call(breed) }.to raise_error(Faraday::ServerError)
      end
    end
  end
end
