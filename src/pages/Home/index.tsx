import { Play } from "phosphor-react";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { CountdownContainer, FormContainer, HomeContainer, MinitesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {

  const { register, handleSubmit, watch } = useForm()


  // const [task, setTask] = useState('')

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="taks">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="projeto1" />
            <option value="projeto2" />
            <option value="projeto3" />
            <option value="banana" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>

          <MinitesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>

        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
