#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>

int calculate_path(char *str, int total_len);

int num;
int *ptr;
int **ptr_to_ptr;

int main(void)
{
  int fd;
  char str[100000];
  char buffer[1001];
  int readsize;

  fd = open("test.txt", O_RDONLY);
  if (fd == -1)
  {
    printf("Error1\n");
    return (1);
  }
  int i;
  int j;
  i = 0;
  while (i < 100000)
  {
    j = 0;
    readsize = read(fd, buffer, 1000);
    if (readsize == -1)
    {
      printf("Error2\n");
      return (1);
    }
    while (j < readsize)
    {
      str[i++] = buffer[j++];
    }
    if (readsize < 1000)
      break;
  }
  if (i == 100000)
  {
    printf("Error3\n");
    return (0);
  }
  str[i] = '\0';
  printf("%i\n", calculate_path(str, i));
  return (0);
}

typedef enum e_dir
{
  UP,
  RIGHT,
  DOWN,
  LEFT
} t_dir;

int calculate_path(char *str, int total_len)
{
  int y;
  int x;
  int width;
  int length;
  int i;
  t_dir dir;

  width = 0;
  while (str[width] != '\n')
    width++;
  printf("width: %i\n", width);
  total_len -= width;
  printf("total_len: %i\n", total_len);
  length = total_len / width;
  printf("len: %i\n", length);
  y = 0;
  x = 0;
  while (str[(y * width + x) + y] == '.' || str[(y * width + x) + y] == '\n' || str[(y * width + x) + y] == '#')
  {
    x++;
    if (x == width)
    {
      x = 0;
      y++;
    }
    printf("index : %i\n", (y * width + x) + y);
  }
  printf("starting coordinates\n y: %i\nx:%i\n", y, x);
  if (str[(y * width + x) + y] == '>')
    dir = RIGHT;
  if (str[(y * width + x) + y] == 'v')
    dir = DOWN;
  if (str[(y * width + x) + y] == '<')
    dir = LEFT;
  if (str[(y * width + x) + y] == '^')
    dir = UP;

  int steps;
  steps = 0;
  while (1)
  {
    str[(y * width + x) + y] = 'X';
    if (dir == DOWN)
      y += 1;
    if (dir == RIGHT)
      x += 1;
    if (dir == UP)
      y -= 1;
    if (dir == LEFT)
      x -= 1;
    if (str[(y * width + x) + y] == 'X')
      steps--;
    if (str[(y * width + x) + y] == '#')
    {
      steps--;
      if (dir == DOWN)
        y -= 1;
      if (dir == RIGHT)
        x -= 1;
      if (dir == UP)
        y += 1;
      if (dir == LEFT)
        x += 1;
      dir = (dir + 1) % 4;
    }
    if (y > length || y < 0 || str[(y * width + x) + y] == '\n' || x < 0)
      return (steps);
    steps++;
    printf("steps: %i\ny: %i\nx:%i\ndir: %i\n----\n", steps, y, x, dir);
  }
}
