require 'byebug'

def spiral(n)
  arr = Array.new(n) { Array.new(n) }
  directions = [:right, :down, :left, :up]
  row = true
  x = 0
  y = 0
  count = 0
  index = 0
  while n - count > 0
    direction = directions[index % 4]

    if direction == :right
      x.upto(n) do |i|
        arr[count][i] = "*"
      end
      count += 1
    elsif direction == :down
      count.upto(n-1) do |i|
        arr[i][n-1] = "*"
      end
      n -= 1
    elsif direction == :left
      count.downto(x) do |i|
        arr[n-1][i]= "*"
      end
      x += 1
    else
      n.downto(y) do |i|
        arr[i][count] ="*"
      end
      y += 1
    end


    index += 1
  end
  arr.each do |line|
    puts line.join("")
  end
end
