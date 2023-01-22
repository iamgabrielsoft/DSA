


int main(int *num) {
    int steps = 0;


    if(num == 0) return steps; 


    while(num != 0) {
        if(*num % 2 == 0) {
            int num = num /2; 
            steps++; 

        }else {
            num--;
            steps++;
        }
    }


    return steps; 
}


