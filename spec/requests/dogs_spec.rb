require 'rails_helper'

describe 'Dogs', type: :request do
  describe 'POST /api/v1/dogs/img_by_breed' do
    include_context 'stubbed API requests'

    let(:service) { described_class.new }

    context 'with a valid breed' do
      let!(:breed) { 'african' }

      it 'returns a success response with a random image' do
        get '/api/v1/dogs/img_by_breed', params: { breed: }

        expect(response).to have_http_status(:success)

        expect(json_response['message']).to match(%r{\Ahttps?://[^\s/$.?#].[^\s]*\z}) # Matches any URL format
        expect(json_response['message']).to match(/\.(png|jpe?g|gif|bmp)\z/) # Matches common image file extensions
      end
    end

    context 'with an invalid breed' do
      it 'returns an error response' do
        get '/api/v1/dogs/img_by_breed', params: { breed: 'invalid_breed' }

        expect(response).to have_http_status(:unprocessable_entity)
        expect(json_response).to eq({ 'status' => 'error', 'message' => 'Invalid breed' })
      end
    end
  end
end
