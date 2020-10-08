#include <stdio.h>
#include <string.h>
#include <limits.h>
#include <math.h>

long power(long x, long y){
    long acumulador = 1;
    for(int i=0; i<y; i++){
        acumulador*=x;
    }
    return acumulador;
}


long long hash(char* s) {
    int len = strlen(s);
    long long p = 7;
    long long m = LLONG_MAX;
    long long hash_value = LLONG_MAX - power(31,6);
    long long p_pow = 1;
    long long hash_cal;
    for(int i=0; i < len; i++ ) {
        hash_cal =  hash_value + (s[i] - 'a' + 1) * p_pow;
        hash_value = hash_cal % m;
        p_pow = power(p_pow,p) % m;
    }
    return hash_value;
}

int main(){

    char p[] = "string";
    long long hash_value = hash(p); 
    printf("%lld\n", hash_value);
    
}