shared_context 'stubbed API requests' do
  before do
    stub_request(:get, 'https://dog.ceo/api/breeds/list/all')
      .to_return(status: 200, body: File.read('spec/fixtures/breeds.json'), headers: {})

    stub_request(:get, 'https://dog.ceo/api/breed/african/images/random')
      .to_return(status: 200, body: File.read('spec/fixtures/random_image.json'), headers: {})
  end
end
