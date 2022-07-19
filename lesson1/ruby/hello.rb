puts "hello world"

# # Variables
colour = "green"
puts "My favourite color #{colour}."

# #  Numbers
boxes = 7
puts "Boxes: #{boxes}"

weight = 1.5;
puts "Weight: #{weight}"

total = weight * boxes
puts "Total: #{total}"

# # Booleans
isTrue = true
isFalse = false
# comment out:cmd+/

# Array 
animals = ['monkey', 'fox', 'sugar glider']
# puts "#{animals}"

# For loops
for animal in animals do
    puts "Animal is #{animal}"
end

# Else if
for animal in animals do
    puts "The #{animal} goes..."
    if (animal == 'monkey')
        puts 'oooaaa'
    elsif (animal == 'fox')
        puts 'ding ding ding'
    elsif (animal == 'sugar glider')
        puts 'hiss'
    end
end

# Hashes
progress = {
    program: "Web development",
    language: "Ruby",
    is_interested: false
}

puts progress

# Function
# A function is a reusable set of instructions
def greeting(name)
    puts "Goodbye, #{name}!"
    return
end

greeting("Bianca")
greeting("Hunter")
greeting("Hardeep")
greeting("Anthony")