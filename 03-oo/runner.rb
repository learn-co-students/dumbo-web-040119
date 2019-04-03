require 'pry'
require_relative "models/bank_account"


ginger_spice_bank_account = BankAccount.new("Geri Hallwell", 9_000)
posh_spice_bank_account = BankAccount.new("Victoria Adams", 100_000)

p posh_spice_bank_account.name

posh_spice_bank_account.name = "Victoria Beckham"

p posh_spice_bank_account.name

ginger_spice_bank_account.close_account

binding.pry

0

# ginger_spice_bank_account = {
#   name: "Geri Halliwell",
#   balance_usd: 9_000
# }

# posh_spice_bank_account = {
#   account_holder_name: "Victoria Adams",
#   balance: 100_000
# }

# def win_the_lottery(spice_girl)
#   spice_girl[:balance] += 1_000_000
#   puts "#{ spice_girl[:name] } won the lottery!"
# end

# # win_the_lottery(ginger_spice_bank_account)
# win_the_lottery(posh_spice_bank_account)

