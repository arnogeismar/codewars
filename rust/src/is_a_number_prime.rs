// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */
pub fn is_prime(x: i64) -> bool {
    if x.is_negative() {
        return false;
    }
    if x == 2 || x == 3 {
        return true;
    }
    if x == 0 || x == 1 || x % 2 == 0 || x % 3 == 0 {
        return false;
    }
    let mut i = 5;
    let mut w = 2;
    while i * i <= x {
        if x % i == 0 {
            return false;
        }
        i += w;
        w = 6 - w;
    }
    true
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_a_number_prime() {
        assert_eq!(is_prime(0), false);
        assert_eq!(is_prime(1), false);
        assert_eq!(is_prime(2), true);
        assert_eq!(is_prime(73), true);
        assert_eq!(is_prime(75), false);
        assert_eq!(is_prime(-1), false);
        assert_eq!(is_prime(5099), true);
    }
}
