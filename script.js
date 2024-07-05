function nextPalindrome(num) {
  //your JS code here.
	function isPalindrome(num) {
        let originalNum = num;
        let reversedNum = 0;
        
        while (num > 0) {
            reversedNum = reversedNum * 10 + num % 10;
            num = (num - num % 10) / 10; // Equivalent to integer division without Math.floor
        }
        
        return originalNum === reversedNum;
    }

    // Convert input to number
    num = parseInt(num);

    // Start checking from the next number
    let nextNumber = num + 1;
    
    // Loop until we find a palindrome
    while (!isPalindrome(nextNumber)) {
        nextNumber++;
    }

    return nextNumber;
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
