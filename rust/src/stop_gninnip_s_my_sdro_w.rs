// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

pub fn spin_words(words: &str) -> String {
    let split = words.split(" ");
    let mut reversed: String = "".to_owned();
    for word in split {
        match word.chars().count() {
            0..=4 => {
                let mut a = String::from(word);
                a.push_str(" ");
                reversed.push_str(&a)
            }
            _ => {
                let mut a = String::from(word).chars().rev().collect::<String>();
                a.push_str(" ");
                reversed.push_str(&a)
            }
        }
    }
    String::from(reversed.trim())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_a_number_prime() {
        assert_eq!(spin_words("Welcome"), "emocleW");
        assert_eq!(spin_words("to"), "to");
        assert_eq!(spin_words("CodeWars"), "sraWedoC");
        assert_eq!(spin_words("Hey fellow warriors"), "Hey wollef sroirraw");
        assert_eq!(
            spin_words("This sentence is a sentence"),
            "This ecnetnes is a ecnetnes"
        );
    }
}
