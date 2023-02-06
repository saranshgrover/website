import React from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Input,
	FormControl,
	FormLabel,
	FormHelperText,
	FormErrorMessage,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

type Props = {
	onVerify: () => void
}

export default function PasswordProtect({ onVerify }: Props) {
	const router = useRouter()
	const verifyPassword = () => {
		if (input === process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD) {
			setIsOpen(false)
			onVerify()
		} else {
			setError(true)
		}
	}
	const [input, setInput] = React.useState('')
	const [isOpen, setIsOpen] = React.useState(true)
	const [error, setError] = React.useState(false)
	return (
		<>
			<Modal isCentered isOpen={isOpen} onClose={() => router.push('..')}>
				<ModalOverlay bg='rgba(0,0,0,0.7)' backdropFilter='blur(10px)' />
				<ModalContent>
					<ModalHeader>Password Protected</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form
							onSubmit={(e) => {
								e.preventDefault()
								verifyPassword()
							}}
						>
							<FormControl
								isInvalid={error}
								onSubmit={(e) => {
									e.preventDefault()
									verifyPassword()
								}}
							>
								<FormLabel>Password</FormLabel>
								<Input type='password' value={input} onChange={(e) => setInput(e.target.value)} />
								<FormHelperText>This page is password protected.</FormHelperText>
								{error && <FormErrorMessage>Incorrect password</FormErrorMessage>}
							</FormControl>
						</form>
					</ModalBody>
					<ModalFooter>
						<Button onClick={verifyPassword}>Submit</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
