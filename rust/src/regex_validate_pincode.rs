// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

pub fn validate_pin(pin: &str) -> bool {
    [4, 6].contains(&pin.chars().count())
        && pin
            .chars()
            .all(|el| !String::from(el).parse::<u32>().is_err())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_validate_pincode() {
        assert_eq!(validate_pin(&12.to_string()), false);
        assert_eq!(validate_pin(&123.to_string()), false);
        assert_eq!(validate_pin(&(-1234).to_string()), false);
        assert_eq!(validate_pin(&1.234.to_string()), false);
        assert_eq!(validate_pin(&00000000.to_string()), false);
        assert_eq!(validate_pin(&(-12345).to_string()), false);
        assert_eq!(validate_pin(&1234567.to_string()), false);
        assert_eq!(validate_pin(&1234.to_string()), true);
        assert_eq!(validate_pin(&"a234"), false);
    }
}
