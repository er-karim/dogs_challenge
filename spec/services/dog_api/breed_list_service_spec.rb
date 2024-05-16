require 'rails_helper'

describe DogApi::BreedListService do
  describe '#call' do
    include_context 'stubbed API requests'

    let(:service) { described_class.new }

    it 'returns an array of breed names' do
      expect(service.call).to include('african', 'akita', 'australian', 'bulldog')
    end

    it 'caches the response' do
      Rails.cache.clear # Clear cache to ensure fresh cache test
      expect(Rails.cache).to receive(:fetch).with(described_class::CACHE_KEY, expires_in: described_class::CACHE_EXPIRY)
      service.call
    end

    context 'when the API request fails' do
      before do
        stub_request(:get, 'https://dog.ceo/api/breeds/list/all')
          .to_return(status: 500)
      end

      it 'raises an error' do
        expect { service.call }.to raise_error(Faraday::ServerError)
      end
    end
  end
end
