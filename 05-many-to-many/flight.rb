class Flight

  ALL = []

  def initialize(route)
    @route = route
    ALL << self
  end

  def tickets # an array of tickets on this flight\
    Ticket.all.select do |ticket|
      ticket.flight == self #self is the instance of the flight that we called #tickets on
    end
  end

  def flights
    self.tickets.map do |ticket|
      ticket.flight
    end
  end

  def self.all
    ALL
  end

end
