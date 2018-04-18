# frozen_string_literal: true

module RequestsHelper
  def json
    JSON.parse(response.body)
  end
end
