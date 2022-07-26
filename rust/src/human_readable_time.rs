// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

pub fn make_readable(seconds: u32) -> String {
    if seconds == 0 {
        return String::from("00:00:00");
    }
    let hours = (seconds as f32 / 3600 as f32) as i32;
    let mut hours_string = String::from("");
    if hours < 10 {
        hours_string.push_str(&format!("{}{}{}", "0", hours, ":"))
    } else {
        hours_string.push_str(&format!("{}{}", hours, ":"))
    }
    let minutes = ((seconds as f32 - hours as f32 * 3600 as f32) / 60 as f32) as i32;
    let mut minutes_string = String::from("");
    if minutes < 10 {
        minutes_string.push_str(&format!("{}{}{}", "0", minutes, ":"))
    } else {
        minutes_string.push_str(&format!("{}{}", minutes, ":"))
    }
    let _seconds =
        (seconds as f32 - hours as f32 * 3600 as f32 - minutes as f32 * 60 as f32) as i32;
    let mut seconds_string = String::from("");
    if _seconds < 10 {
        seconds_string.push_str(&format!("{}{}", "0", _seconds))
    } else {
        seconds_string.push_str(&format!("{}", _seconds))
    }
    format!("{}{}{}", hours_string, minutes_string, seconds_string)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_human_readable() {
        assert_eq!(make_readable(0), "00:00:00");
        assert_eq!(make_readable(5), "00:00:05");
        assert_eq!(make_readable(60), "00:01:00");
        assert_eq!(make_readable(86399), "23:59:59");
        assert_eq!(make_readable(359999), "99:59:59");
    }
}
