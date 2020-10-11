#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0

int count_words(char* s){
    int words = 0;

    if(s == NULL){
        return 0;
    }
    
    for(int i = 0; s[i+1] != '\0'; i++){
        if(s[i] == ' ' && s[i+1] != ' '){
            words++;
        }
    }
    if(s[0] == '\n' || s[0] == '\0'){
        return 0;
    }else{
        return words + 1;
    }
}

int max_len_word(char* s){
    int max = 0;
    int count = 0;

    for( int i = 0; s[i] != '\0'; i++){
        if(s[i] != ' '){
            count++;
        }else{
            max = max < count ? count : max;
            count = 0;
        }
    }
    
    max = max < count ? count : max;
    return max;
}

char** word_breaker(char* s){
    int num_words = count_words(s);
    int max_word = max_len_word(s);
    char** words;
    int count_words = 0;
    int count = 0;
    int mult_space = FALSE;

    words = malloc((num_words + 1) * sizeof(char*));
    for(int i = 0; i < num_words + 1; i++){
        words[i] = malloc((max_word + 1 ) * sizeof(char));
    }

    for (int i = 0; s[i] != '\0'; i++){
        if(s[i] != ' '){
            words[count_words][count] = s[i];
            mult_space = FALSE;
            count++;
        }else{
            if(!mult_space){
                count_words++;
                count = 0;
                mult_space = TRUE;
            }
        }
    }
    words[num_words] = NULL;
    return words;

}

int main(){
    char* string = "string de teste";

    char** word = word_breaker(string);
    for(int i = 0; word[i] != NULL; i++){
        printf("Strind Nº %d é \"%s\"\n", i, word[i]);
    }
}