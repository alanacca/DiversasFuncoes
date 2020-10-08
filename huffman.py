class Letter(object):
    def __init__(self, ch, freq):
        self.ch = ch
        self.freq = freq
        self.bitstring = ""

    def __repr__(self):
        return str(self.char)+":"+str(self.freq)


def build_list(path):
    """
    Read a text file and build a dict of all letters and
    their frequencies, then return a list with the Letters
    ordened by their frequencies.
    """

    chars = {}
    with open(path) as f:
        while True:

            # read a character
            buffer = f.read(1)

            # if EOF stop
            if not buffer:
                break

            # store the character
            if buffer in chars.keys():
                chars[buffer] = chars[buffer] + 1
            else:
                chars[buffer] = 1

    # create the list ordened by the frequency
    return sorted([Letter(ch, freq) for ch, freq in chars.items()],
                  key=lambda l: l.freq)



class TreeNode(object):
    def __init__(self, freq, left, right):
        self.freq = freq
        self.left = left
        self.right = right

    def __repr__(self):
        return "Node:"+str(self.freq)


def build_tree(lettersList):
    '''
    Run through the list of letters and build the min heap
    for the huffman tree.
    '''
    while len(lettersList) > 1:

        # pick the first two letters with minor frequency
        left = lettersList.pop(0)
        right = lettersList.pop(0)

        # sum the frequencies to get the father's frequency
        totalFreq = left.freq + right.freq

        # create a new node
        node = TreeNode(totalFreq, left, right)

        # store the new node in list
        lettersList.append(node)

        # sort by frequency
        lettersList.sort(key=lambda l: l.freq)

    return lettersList[0]


def get_bitstring(root, bitstring):
    """
    go recursively through the tree and set the bitstring
    for each letter and return the list of letters
    """
    # if the root is a letter, then return itself
    if type(root) is Letter:
        root.bitstring = bitstring
        return [root]

        # if the root is a tree node, access recursively the children
    letters = []
    letters += get_bitstring(root.left, bitstring + "0")
    letters += get_bitstring(root.right, bitstring + "1")

    return letters

def huffman(path):
    """
        reads a file and build a bitstring for every letter
    """
    # create the list with letters
    letterList = Letter.build_list(path)

    # build the huffman tree
    root = Node.build_tree(letterList)

    # get the bitstring for each letter
    letters = Node.get_bitstring(root, "")

    # open the file
    with open(path) as f:
        with open("huffman.txt", "w") as h:
            while True:

                # read each character in the file
                c = f.read(1)

                # EOF
                if not c:
                    break

                # get the object Letter correspondent
                letter = list(filter(lambda l: l.ch == c, letters))[0]

                h.write(letter.bitstring)


if __name__ == "__main__":
    huffman("teste.txt")
