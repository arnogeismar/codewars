// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

pub fn order(sentence: &str) -> String {
    let words = sentence.split(' ');
    let mut ordered = vec![""; 9];
    for word in words {
        let chars = word.chars();
        for _char in chars {
            if _char.is_digit(10) {
                let index: usize = _char.to_digit(10).unwrap() as usize;
                ordered[index - 1] = word;
            }
        }
    }
    ordered.join(" ").trim().to_string()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_your_order_please() {
        assert_eq!(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
        assert_eq!(
            order("4of Fo1r pe6ople g3ood th5e the2"),
            "Fo1r the2 g3ood 4of th5e pe6ople"
        );
        assert_eq!(order(""), "");
    }
}
