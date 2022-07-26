// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expanded_form(12) # Should return '10 + 2'
// expanded_form(42) # Should return '40 + 2'
// expanded_form(70304) # Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

pub fn expanded_form(n: u64) -> String {
    let string_num = n.to_string();
    let chars = string_num.char_indices();
    let len = string_num.len();
    let mut output = String::from("");
    for (index, _char) in chars {
        if _char.eq_ignore_ascii_case(&'0') {
            continue;
        }
        if index != 0 && index != len {
            output.push_str(" + ");
        }
        let mut zeros = String::from("");
        let mut _index = index;
        while _index != len - 1 {
            zeros.push_str("0");
            _index = _index + 1;
        }
        output.push(_char);
        output.push_str(&zeros);
    }
    output
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_write_number_in_expanded_form() {
        assert_eq!(expanded_form(12), "10 + 2");
        assert_eq!(expanded_form(42), "40 + 2");
        assert_eq!(expanded_form(70304), "70000 + 300 + 4");
    }
}
