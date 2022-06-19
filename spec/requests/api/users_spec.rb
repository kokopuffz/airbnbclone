require "rails_helper"

RSpec.describe "Api::Users", type: :request do
  describe "GET show" do
    let(:headers) do 
      { "Accept" => "application/json" }
    end
  
    context "user exists" do
      it "is successful" do
        user = create(:user)
        get api_user_path(user), headers: headers
        expect(response).to be_successful
      end
    end

    context "user does not exist" do
      it "is not found" do 
      end
    end
  end 
end