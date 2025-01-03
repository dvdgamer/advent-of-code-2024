use std::fs;

// Create Guard
#[derive(Debug)]
enum Direction {
    Up,
    Right,
    Down,
    Left,
}

#[derive(Debug)]
struct Guard {
    current_position: (usize, usize),
    direction: Direction,
}

// impl Guard {
//     fn new (position: (usize, usize), direction: Direction) -> Self {
//       Guard { current_position: (), direction: () }
//     }
// }

fn get_guard_location(vec_grid: &Vec<Vec<char>>) -> (usize, usize) {
    for (y, row) in vec_grid.iter().enumerate() {
        for (x, &ch) in row.iter().enumerate() {
            if ch == '^' {
                println!("y: {} x:{}", y, x);
                return (y, x);
            }
        }
    }
    panic!("Guard not found!")
}

fn main() {
    // Get input
    let input = fs::read_to_string("src/bin/day6/test.txt").expect("Unable to read file");

    // Create a 2D vector
    let mut vec_2d: Vec<Vec<char>> = Vec::new();

    let lines: Vec<&str> = input.lines().collect();

    for line in lines {
        let row: Vec<char> = line.chars().collect();
        vec_2d.push(row);
    }

    let max_length: usize = vec_2d.len();
    let max_width: usize = vec_2d[0].len();

    let mut steps: u32 = 0;

    // Get initial position
    let mut guard: Guard = Guard {
        current_position: get_guard_location(&vec_2d),
        direction: Direction::Up,
    };

    println!("{:?}", guard);

    let (y, x) = &guard.current_position;

    // Finish this
    fn move_guard(vec_grid: &Vec<Vec<char>>) {
        if guard.current_position.0 < 0
            || guard.current_position.0 > max_length
            || guard.current_position.1 < 0
            || guard.current_position.1 > max_width
        {
            println!("Out of bounds at {}", guard.current_position)
            // return steps
        } else {
            match guard.direction {
                Direction::Up => {
                    if vec_2d[*y - 1][*x] == '#' {
                        guard.direction = Direction::Right;
                    } else {
                        guard.current_position.0 -= 1;
                    }
                }
                Direction::Down => {
                    if vec_2d[*y + 1][*x] == '#' {
                        guard.direction = Direction::Left;
                    } else {
                        guard.current_position.0 += 1;
                    }
                }
                Direction::Right => {
                    if vec_2d[*y][*x + 1] == '#' {
                        guard.direction = Direction::Down;
                    } else {
                        guard.current_position.1 += 1;
                    }
                }
                Direction::Left => {
                    if vec_2d[*y][*x - 1] == '#' {
                        guard.direction = Direction::Up;
                    } else {
                        guard.current_position.1 -= 1;
                    }
                }
            }
        }
    }

    // while guard.current_position.0 > 0
    //     && guard.current_position.0 < max_length
    //     && guard.current_position.1 > 0
    //     && guard.current_position.1 < max_width
    // {
    //     match guard.direction {
    //         Direction::Up => {
    //             if vec_2d[*y - 1][*x] == '#' {
    //                 guard.direction = Direction::Right;
    //             } else {
    //                 guard.current_position.0 -= 1;
    //             }
    //         }
    //         Direction::Down => {
    //             if vec_2d[*y + 1][*x] == '#' {
    //               guard.direction = Direction::Left;
    //             } else {
    //               guard.current_position.0 += 1;
    //             }
    //         }
    //         Direction::Right => {
    //             if vec_2d[*y][*x + 1] == '#' {
    //               guard.direction = Direction::Down;
    //             } else {
    //               guard.current_position.1 += 1;
    //             }
    //         }
    //         Direction::Left => {
    //             if vec_2d[*y][*x - 1] == '#' {
    //               guard.direction = Direction::Up;
    //             } else {
    //               guard.current_position.1 -= 1;
    //             }
    //         }
    //     }
    // }

    // let guard = Guard::new(guard_position, Direction::Up);
}
