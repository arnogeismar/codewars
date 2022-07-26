// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

pub fn likes(names: &[&str]) -> String {
    let likes = String::from("likes this");
    let like = String::from("like this");
    match names.len() {
        0 => format!("no one {}", likes),
        1 => format!("{} {}", names.get(0).unwrap(), likes),
        2 => format!(
            "{} and {} {}",
            names.get(0).unwrap(),
            names.get(1).unwrap(),
            like
        ),
        3 => format!(
            "{}, {} and {} {}",
            names.get(0).unwrap(),
            names.get(1).unwrap(),
            names.get(2).unwrap(),
            like,
        ),
        _ => format!(
            "{}, {} and {} others {}",
            names.get(0).unwrap(),
            names.get(1).unwrap(),
            names.len() - 2,
            like,
        ),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_who_likes_it() {
        assert_eq!(likes(&[]), "no one likes this");
        assert_eq!(likes(&["Peter"]), "Peter likes this");
        assert_eq!(likes(&["Jacob", "Alex"]), "Jacob and Alex like this");
        assert_eq!(
            likes(&["Max", "John", "Mark"]),
            "Max, John and Mark like this"
        );
        assert_eq!(
            likes(&["Alex", "Jacob", "Mark", "Max"]),
            "Alex, Jacob and 2 others like this"
        );
    }
}
