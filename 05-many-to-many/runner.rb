require 'pry'

require_relative 'flight'
require_relative 'passenger'
require_relative 'ticket'

rei = Passenger.new("Rei")
adam = Passenger.new("Adam Friedman")
bill = Passenger.new("Bill")
gino = Passenger.new("Gino")

to_beyonce_private_island = Flight.new("EWR - BEY")
la = Flight.new("EWR - LAX")
hou = Flight.new("JFK - HOU")
degaulle = Flight.new("JFK - CDG")
bermuda = Flight.new("JFK - BDA")


Ticket.new(rei, to_beyonce_private_island)
Ticket.new(rei, la)
Ticket.new(adam, hou)
Ticket.new(adam, degaulle)
Ticket.new(bill, bermuda)
Ticket.new(gino, degaulle)
Ticket.new(gino, la)



binding.pry

false
