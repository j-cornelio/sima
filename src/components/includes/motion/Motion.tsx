import { motion } from "motion/react"
import type { Variants } from "motion/react"
import Hero from "./Hero";

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}

function Motion () {
    return (
        <div>
            <h1>motion</h1>

            <Hero />

            <motion.div 
                style={{outline: '2px solid red', width: '100px', height: '100px'}} 
                animate={{ 
                    scale: 2,
                    transition: { duration: 2 },
                    rotate: 111
                 }} />

            <motion.button
                style={{background: 'purple', width: '50px', height: '50px'}}
                initial={{ scale: 0 }} animate={{ scale: 1 }} />

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                style={ball}
                />

            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={box}
            />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Motion;