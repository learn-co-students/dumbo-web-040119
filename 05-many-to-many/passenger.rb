class Passenger

  ALL = []

  def initialize(name)
    @name = name
    ALL << self
  end

  def tickets # returns an array of the passenger's tickets
    Ticket.all.select do |ticket|
      ticket.passenger == self #self is the instance of the passenger that we called #tickets on
    end
  end

  def flights
    # my_tickets[0].flight

    # self.tickets.map(&:flight)
    # tickets.map(&:flight)

    # tickets.map do |ticket|
    #   ticket.flight
    # end

    self.tickets.map do |ticket|
      ticket.flight
    end
  end


  def self.all
    ALL
  end

end
