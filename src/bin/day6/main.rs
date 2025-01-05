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
        let (y, x) = self.current_position;

        // Finish making these to refactor
        match self.direction {
            Direction::Up => {
              match grid[y - 1][x] {
                  '#' => self.direction = Direction::Right,
                  _ => self.current_position.0 -= 1,
              }
                // if grid[y - 1][x] != '#' {
                //     self.current_position.0 -= 1;
                // } else if grid[y - 1][x] == '#' {
                //     self.direction = Direction::Right
                // }
            }
            Direction::Right => {
                if grid[y][x + 1] != '#' {
                    self.current_position.1 += 1;
                } else if grid[y][x + 1] == '#' {
                    self.direction = Direction::Down
                }
            }
            Direction::Down => {
                if grid[y + 1][x] != '#' {
                    self.current_position.0 += 1;
                } else if grid[y + 1][x] == '#' {
                    self.direction = Direction::Left
                }
            }
            Direction::Left => {
                if grid[y][x - 1] != '#' {
                    self.current_position.1 -= 1;
                } else if grid[y][x - 1] == '#' {
                    self.direction = Direction::Up
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

    println!("{:?}", guard.current_position);

    // main loop
    while guard.current_position.0 <= max_length
        && guard.current_position.1 <= max_width
        && guard.current_position.0 >= 0
        && guard.current_position.1 >= 0
    {
        guard.move_guard(&vec_2d);
        steps += 1;
        println!("{:?}", guard.current_position);
    }
    println!("steps {:?}", steps);

    println!("{:?}", guard);
}
