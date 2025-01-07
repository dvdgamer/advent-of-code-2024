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
    unique_positions: usize,
}

impl Guard {
    fn new(position: (usize, usize), direction: Direction) -> Self {
        Guard {
            current_position: position,
            direction,
            unique_positions: 1,
        }
    }

    fn move_guard(&mut self, grid: &mut Vec<Vec<char>>) -> bool {
        let (y, x) = self.current_position;

        println!("move_guard");

        if grid[y][x] == '.' || grid[y][x] == '^' {
            grid[y][x] = 'X'
        }

        let next_move_up = if y > 0 { grid[y - 1][x] } else { '-' };
        let next_move_right = if x < grid[0].len() - 1 { grid[y][x + 1] } else { '-' };
        let next_move_down = if y < grid.len() - 1 { grid[y + 1][x] } else { '-' };
        let next_move_left = if x > 0 { grid[y][x - 1] } else { '-' };

        match self.direction {
            Direction::Up => match next_move_up {
                '#' => self.direction = Direction::Right,
                '.' => {
                    self.current_position.0 -= 1;
                    self.unique_positions += 1;
                }
                'X' => self.current_position.0 -= 1,
                '-' => return false,
                _ => panic!(),
            },
            Direction::Right => match next_move_right {
                '#' => self.direction = Direction::Down,
                '.' => {
                    self.current_position.1 += 1;
                    self.unique_positions += 1
                }
                'X' => self.current_position.1 += 1,
                '-' => return false,
                _ => panic!(),
            },
            Direction::Down => match next_move_down {
                '#' => self.direction = Direction::Left,
                '.' => {
                    self.current_position.0 += 1;
                    self.unique_positions += 1;
                }
                'X' => self.current_position.0 += 1,
                '-' => return false,
                _ => panic!(),
            },
            Direction::Left => match next_move_left {
                '#' => self.direction = Direction::Up,
                '.' => {
                    self.current_position.1 -= 1;
                    self.unique_positions += 1
                }
                'X' => self.current_position.1 -= 1,
                '-' => return false,
                _ => panic!(),
            },
        }
        true
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
    let input = fs::read_to_string("src/bin/day6/input.txt").expect("Unable to read file");

    // Create a 2D vector
    let mut vec_2d: Vec<Vec<char>> = Vec::new();

    let lines: Vec<&str> = input.lines().collect();

    for line in lines {
        let row: Vec<char> = line.chars().collect();
        vec_2d.push(row);
    }

    // Get initial position
    let guard_position = get_guard_location(&vec_2d);

    // Instanciate guard
    let mut guard: Guard = Guard::new(guard_position, Direction::Up);

    // Main loop
    loop {
        // Check if out of bounds
        if guard.current_position.0 >= vec_2d.len()
            || guard.current_position.1 >= vec_2d[0].len()
        {
            println!("Out of bounds! ");
            break;
        }

        // Move the guard
        if !guard.move_guard(&mut vec_2d) {
            println!("Travel over!");
            break;
        }
    }

    println!("unique positions: {}", guard.unique_positions);
}
