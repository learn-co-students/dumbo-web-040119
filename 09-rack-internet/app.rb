require 'pry'

class App

  def call(environment_hash)

    status_code = 500
    header = { "Content-type" =>  "text/html" }
    if environment_hash["path"] == "/graham"
      body = ["<html>Crackers</html>"]
    else

    end

    return [status_code, header, body]
  end

end
