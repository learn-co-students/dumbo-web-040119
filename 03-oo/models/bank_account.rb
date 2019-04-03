class BankAccount

  attr_accessor :name
  attr_reader :balance
  attr_writer :potato

  @@number_of_bank_accounts = 0
  ALL = []

  def initialize(name, starting_balance)
    @name = name
    @balance = starting_balance

    # @@number_of_bank_accounts = @@number_of_bank_accounts + 1
    @@number_of_bank_accounts += 1
    ALL << self
    # binding.pry
  end

  def self.number_of_bank_accounts
    @@number_of_bank_accounts
  end

  def self.all
    ALL
  end
s
  # def name
  #   @name
  # end

  # def name=(new_name)
  #   @name = new_name
  # end

  # def balance
  #   @balance
  # end

  #instance method
  def close_account
    puts "Bye Felicia, you don't have an account with us anymore"
    "💸 💁‍♀️"
  end

  def give_graham_all_your_money
    puts "TYSM"
    "💸"
  end

end