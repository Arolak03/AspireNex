from tictactoe import TicTacToe
from minimax import best_move

def print_board(board):
    for i, row in enumerate([board[i*3:(i+1)*3] for i in range(3)]):
        # print(row)
        print(' | '.join(row))
        if i<2:
            print('-' * 9)
        

def main():
    game = TicTacToe()
    human = 'O'
    ai = 'X'
    
    while not game.is_game_over():
        print_board(game.board)
        if game.current_winner:
            # print(f"{game.current_winner} wins!")
            break

        if game.current_player == human:
            move = input("Enter your move (0-8): ")
            if not move.isdigit() or not (0 <= int(move) <= 8):
                print("Invalid move. Please enter a number between 0 and 8.")
                continue
            move = int(move)
            if game.board[move] != ' ':
                print("Invalid move. The cell is already filled.")
                continue
            if game.make_move(move, human):
                game.current_player = ai
        else:
            print("AI is thinking...")
            move = best_move(game, ai)
            game.make_move(move, ai)
            game.current_player = human
            
    print_board(game.board)
    if game.current_winner:
        if game.current_winner == ai:
            print("ai won")
        else:
            print("you win");
    elif game.is_draw():
        print("It's a draw!")
    

if __name__ == "__main__":
    main()
