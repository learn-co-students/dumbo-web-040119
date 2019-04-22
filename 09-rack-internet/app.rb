require 'pry'

class App

  def call(environment_hash)

    status_code = 500
    header = { "Content-type" =>  "text/html" }
    body = ["<html>Banana</html>"]

    return [status_code, header, body]
  end

end
