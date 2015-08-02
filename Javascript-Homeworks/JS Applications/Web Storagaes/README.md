Create a simple number guessing game
</br> The computer generates a random number with four
different digits
</br> The leftmost digit must not be 0 (zero)
</br> For simplicity called abcd
</br> At each turn the player enters a four-digit number
</br> For simplicity called xyzw
</br> When the game ends:
</br> Ask the player for a nickname
</br> Save the nickname inside the localStorage
</br> Implement a high-score list
</br> Sheep means that a digit from xyzw is contained in
abcd, but not on the same position
</br> If two such digits exists, the sheep are 2
</br> Ram means that a digit from xyzw is contained in abcd
and it is on the same position
</br> If two such digits exists, the rams are 2
</br> The game continues until the player guesses the
number abcd
</br> i.e. has 4 rams
