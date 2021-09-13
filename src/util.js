class Util {
    static timeout(duration) {
        return new Promise(resolve => setTimeout(resolve, duration))
    }
}