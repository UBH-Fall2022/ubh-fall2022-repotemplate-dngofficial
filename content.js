const negativeWords = [
    "Abrasive", "Apathetic", "Controlling", "Dishonest", "Impatient", "Anxious", "Betrayed", "Disappointed", "Embarrassed", "Jealous",
    "Abysmal", "Bad", "Callous", "Corrosive", "Damage", "Despicable", "Don’t", "Enraged", "Fail", "Gawky", "Haggard", "Hurt", "Icky",
    "Insane", "Jealous", "Lose", "Malicious", "Naive", "Not", "Objectionable", "Pain", "Questionable", "Reject", "Rude", "Sad",
    "Sinister", "Stuck", "Tense", "Ugly", "Unsightly", "Vice", "Wary", "Yell", "Zero", "Adverse", "Banal", "Can’t", "Corrupt",
    "Damaging", "Detrimental", "Dreadful", "Eroding", "Faulty", "Ghastly", "Hard", "Hurtful", "Ignorant", "Insidious", "Junky",
    "Lousy", "Mean", "Nasty", "Noxious", "Odious", "Perturb", "Quirky", "Renege", "Ruthless", "Savage", "Slimy", "Stupid",
    "Terrible", "Undermine", "Untoward", "Vicious", "Weary", "Yucky", "Alarming", "Barbed", "Clumsy", "Dastardly", "Dirty",
    "Dreary", "Evil", "Fear", "Grave", "Hard-hearted", "Ignore", "Injure", "Insipid", "Lumpy", "Menacing", "Naughty", "None",
    "Offensive", "Pessimistic", "Quit", "Repellant", "Scare", "Smelly", "Substandard", "Terrifying", "Unfair", "Unwanted", "Vile",
    "Wicked", "Angry", "Belligerent", "Coarse", "Crazy", "Dead", "Disease", "Feeble", "Greed", "Harmful", "Ill", "Injurious",
    "Messy", "Negate", "No one", "Old", "Petty", "Reptilian", "Scary", "Sobbing", "Suspect", "Threatening", "Unfavorable",
    "Unwelcome", "Villainous", "Woeful", "Annoy", "Bemoan", "Cold", "Creepy", "Decaying", "Disgusting", "Fight", "Grim", "Hate",
    "Immature", "Misshapen", "Negative", "Nothing", "Oppressive", "Plain", "Repugnant", "Scream", "Sorry", "Suspicious", "Unhappy",
    "Unwholesome", "Vindictive", "Worthless", "Anxious", "Beneath", "Cold-hearted", "Criminal", "Deformed", "Disheveled", "Filthy",
    "Grimace", "Hideous", "Imperfect", "Missing", "Never", "Neither", "Poisonous", "Repulsive", "Severe", "Spiteful", "Unhealthy",
    "Unwieldy", "Wound", "Apathy", "Boring", "Collapse", "Cruel", "Deny", "Dishonest", "Foul", "Gross", "Homely", "Impossible",
    "Misunderstood", "No", "Nowhere", "Poor", "Revenge", "Shocking", "Sticky", "Unjust", "Unwise", "Appalling", "Broken",
    "Confused", "Cry", "Deplorable", "Dishonorable", "Frighten", "Grotesque", "Horrendous", "Inane", "Moan", "Nobody", "Prejudice",
    "Revolting", "Shoddy", "Stinky", "Unlucky", "Upset", "Atrocious", "Contrary", "Cutting", "Depressed", "Dismal", "Frightful",
    "Gruesome", "Horrible", "Inelegant", "Moldy", "Nondescript", "Rocky", "Sick", "Stormy", "Unpleasant", "Awful", "Contradictory",
    "Deprived", "Distress", "Guilty", "Hostile", "Infernal", "Monstrous", "Nonsense", "Rotten", "Sickening", "Stressful",
    "Unsatisfactory"
  ];
const myInterval = setInterval(changeComment, 1000)

var nums=[3,10,25]
var remaining = new Array()
function changeComment() {

    for(i = 0; i<nums.length; i++){

    var second = document.querySelector("ytd-comment-thread-renderer:nth-child(" +  nums[i] + ")")
    var commentRenderer = second.firstElementChild
    var mainBody = commentRenderer.children[2]
    var text = mainBody.children[1].children[1].children[1].children[0].children[1]
    var text_str = text.innerHTML

    if (second != null) {

        console.log(second)
        console.log(commentRenderer)
        console.log(mainBody)
        console.log(text)
        console.log(text_str)


        // censor loop 
        var replacements = negativeWords
        replacements.forEach(r => { 

        var regex = new RegExp(r, "g");
        var res = text_str.replace(regex, "$&#!@*%$");

        text.innerHTML = res
        });
        if (i==nums.length-1){
            if (remaining.length == 0){
                clearInterval(myInterval);
            }else{
                nums=remaining
                remaining=[]
            }
        }
    }else{
        remaining.push(i)
    }
    };

}

function readData(){
    fetch("./HATESPEECH.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data))
}

function filterComment(commentData, currentToxicityLevel) {
  for (const commentNumber in commentData) {
    if (commentData.hasOwnProperty(commentNumber)) {
      const toxicityScore = parseFloat(commentData[commentNumber]);

      if (toxicityScore > currentToxicityLevel) {
        // Find the comment number in the format "comment#X"
        const commentIndex = parseInt(commentNumber.match(/\d+/)[0]);
        changeComment(commentIndex);
      }
    }
  }
}

function changeComment(index) {
  const commentThread = document.querySelector(`ytd-comment-thread-renderer:nth-child(${index})`);

  if (commentThread) {
    const textElement = commentThread.querySelector("yt-formatted-string#content-text");

    if (textElement) {
      // Replace each letter of the comment text with black squares
      const commentText = textElement.textContent;
      const blackSquareText = '⬛'.repeat(commentText.length);
      textElement.textContent = blackSquareText;
    }
  }
}






