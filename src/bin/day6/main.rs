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

impl Guard {
    fn new(position: (usize, usize), direction: Direction) -> Self {
        Guard {
            current_position: position,
            direction,
        }
    }

    fn move_guard(&mut self, grid: &Vec<Vec<char>>) {
        let (x, y) = self.current_position;
        match self.direction {
            Direction::Up => {
                if x > 0 && grid[x - 1][y] != '#' {
                    self.current_position.0 -= 1;
                }
            }
            Direction::Right => {
                if y < grid[0].len() - 1 && grid[x][y + 1] != '#' {
                    self.current_position.1 += 1;
                }
            }
            Direction::Down => {
                if x < grid.len() - 1 && grid[x + 1][y] != '#' {
                    self.current_position.0 += 1;
                }
            }
            Direction::Left => {
                if y > 0 && grid[x][y - 1] != '#' {
                    self.current_position.1 -= 1;
                }
            }
        }
    }
}

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
    let guard_position = get_guard_location(&vec_2d);

    // Instanciate guard

    // let mut guard: Guard = Guard {
    //   current_position: get_guard_location(&vec_2d),
    //   direction: Direction::Up,
    // };
    let mut guard: Guard = Guard::new(guard_position, Direction::Up);

    while guard.current_position.0 <= max_length && guard.current_position.1 <= max_width {
        guard.move_guard(&vec_2d);
        steps += 1;
    }

    println!("{:?}", guard);
}
